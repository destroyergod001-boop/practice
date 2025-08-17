import React, { useState, useEffect } from 'react';
import { Modal } from '@core/ui/Modal';
import { Button } from '@core/ui/Button';
import { AbilityModel } from '@core/Model/Ability';
import { AbilityBasicTab } from './AbilityBasicTab';
import { StatsInputGroup } from '../AdminCommonComponents/StatsInputGroup';
import { ElementsInputGroup } from '../AdminCommonComponents/ElementsInputGroup';
import { AbilityAssetTab } from './AbilityAssetTab';
import { TableApi } from '@core/api/tableApi';
import { AbilityDTOFromApi } from '@core/Model/Ability';

const abilityApi = new TableApi<AbilityDTOFromApi, AbilityModel>({
  basePath: '/api/abilities',
  tableName: 'abilities'
});

interface AbilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  ability?: AbilityModel | null;
}

export const AbilityModal: React.FC<AbilityModalProps> = ({
  isOpen,
  onClose,
  onSave,
  ability
}) => {
  const [activeTab, setActiveTab] = useState('basic');
  const [abilityData, setAbilityData] = useState<Partial<AbilityModel>>({
    name: '',
    description: '',
    tier: 1,
    category: 'single',
    turn: 1,
    gold: 0,
    level: 1,
    basic_effect_fixed_value: 0,
    basic_effect_percentage_value: 0,
    monster_id: 0,
    monster_number: 0,
    elements: {},
    basic_stats: {},
    requirement_stats: {},
    element_mastery: {},
    element_resistance: {},
    requirement_element_mastery: {},
    requirement_element_resistance: {},
    asset_location: ''
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (ability) {
      setAbilityData(ability);
    } else {
      setAbilityData({
        name: '',
        description: '',
        tier: 1,
        category: 'single',
        turn: 1,
        gold: 0,
        level: 1,
        basic_effect_fixed_value: 0,
        basic_effect_percentage_value: 0,
        monster_id: 0,
        monster_number: 0,
        elements: {},
        basic_stats: {},
        requirement_stats: {},
        element_mastery: {},
        element_resistance: {},
        requirement_element_mastery: {},
        requirement_element_resistance: {},
        asset_location: ''
      });
    }
    setActiveTab('basic');
  }, [ability, isOpen]);

  const handleSave = async () => {
    try {
      setLoading(true);
      if (ability?.id) {
        // Update existing ability
        await abilityApi.update([{ id: ability.id, status: '=' }], abilityData);
      } else {
        // Create new ability
        await abilityApi.create(abilityData);
      }
      onSave();
    } catch (error) {
      console.error('Failed to save ability:', error);
      alert('Failed to save ability');
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'basic', label: 'Basic' },
    { id: 'stats', label: 'Stats' },
    { id: 'requirements', label: 'Requirements' },
    { id: 'elements', label: 'Elements' },
    { id: 'asset', label: 'Asset' }
  ];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={ability ? 'Edit Ability' : 'Create New Ability'}
      size="5xl"
    >
      <div className="space-y-6">
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === 'basic' && (
            <AbilityBasicTab
              data={abilityData}
              onChange={setAbilityData}
            />
          )}

          {activeTab === 'stats' && (
            <div className="space-y-6">
              <StatsInputGroup
                data={abilityData}
                onChange={setAbilityData}
                jsonFieldKey="basic_stats"
                title="Basic Stats"
                description="Base statistical bonuses provided by this ability"
              />
            </div>
          )}

          {activeTab === 'requirements' && (
            <div className="space-y-6">
              <StatsInputGroup
                data={abilityData}
                onChange={setAbilityData}
                jsonFieldKey="requirement_stats"
                title="Requirement Stats"
                description="Minimum stats required to use this ability"
              />
            </div>
          )}

          {activeTab === 'elements' && (
            <div className="space-y-6">
              <ElementsInputGroup
                data={abilityData}
                onChange={setAbilityData}
                jsonFieldKey="element_mastery"
                title="Element Mastery"
                description="Elemental mastery bonuses provided by this ability"
              />
              <ElementsInputGroup
                data={abilityData}
                onChange={setAbilityData}
                jsonFieldKey="element_resistance"
                title="Element Resistance"
                description="Elemental resistance bonuses provided by this ability"
              />
              <ElementsInputGroup
                data={abilityData}
                onChange={setAbilityData}
                jsonFieldKey="requirement_element_mastery"
                title="Required Element Mastery"
                description="Minimum elemental mastery required to use this ability"
              />
              <ElementsInputGroup
                data={abilityData}
                onChange={setAbilityData}
                jsonFieldKey="requirement_element_resistance"
                title="Required Element Resistance"
                description="Minimum elemental resistance required to use this ability"
              />
            </div>
          )}

          {activeTab === 'asset' && (
            <AbilityAssetTab
              data={abilityData}
              onChange={setAbilityData}
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} loading={loading}>
            {ability ? 'Update' : 'Create'} Ability
          </Button>
        </div>
      </div>
    </Modal>
  );
};