import React, { useState, useEffect } from 'react';
import { Button } from '@core/ui/Button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { AbilityModal } from './AbilityModal';
import { TableApi } from '@core/api/tableApi';
import { AbilityDTOFromApi, AbilityModel } from '@core/Model/Ability';

const abilityApi = new TableApi<AbilityDTOFromApi, AbilityModel>({
  basePath: '/api/abilities',
  tableName: 'abilities'
});

export function AbilitiesManagement() {
  const [abilities, setAbilities] = useState<AbilityModel[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingAbility, setEditingAbility] = useState<AbilityModel | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadAbilities();
  }, []);

  const loadAbilities = async () => {
    try {
      setLoading(true);
      const data = await abilityApi.getAll();
      setAbilities(data);
    } catch (error) {
      console.error('Failed to load abilities:', error);
      // For now, use empty array if API fails
      setAbilities([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateNew = () => {
    setEditingAbility(null);
    setIsModalOpen(true);
  };

  const handleEdit = (ability: AbilityModel) => {
    setEditingAbility(ability);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this ability?')) {
      try {
        await abilityApi.delete([{ id, status: '=' }]);
        await loadAbilities();
      } catch (error) {
        console.error('Failed to delete ability:', error);
        alert('Failed to delete ability');
      }
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingAbility(null);
  };

  const handleSave = async () => {
    await loadAbilities();
    handleModalClose();
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg text-gray-600 dark:text-gray-400">Loading abilities...</div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Abilities Management</h1>
        <Button onClick={handleCreateNew} className="flex items-center gap-2">
          <Plus size={20} />
          Create New Ability
        </Button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Tier
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {abilities.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                    No abilities found. Create your first ability to get started.
                  </td>
                </tr>
              ) : (
                abilities.map((ability) => (
                  <tr key={ability.id} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {ability.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-300 max-w-xs truncate">
                      {ability.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {ability.category}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                      {ability.tier}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleEdit(ability)}
                          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          <Edit size={16} />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleDelete(ability.id)}
                          className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                        >
                          <Trash2 size={16} />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      <AbilityModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        onSave={handleSave}
        ability={editingAbility}
      />
    </div>
  );
}