import React from 'react';
import { AbilityModel } from '@core/Model/Ability';

interface AbilityAssetTabProps {
  data: Partial<AbilityModel>;
  onChange: (data: Partial<AbilityModel>) => void;
}

export const AbilityAssetTab: React.FC<AbilityAssetTabProps> = ({ data, onChange }) => {
  const handleChange = (field: keyof AbilityModel, value: any) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h4 className="font-semibold text-lg mb-4 text-gray-800 dark:text-gray-200">Asset Configuration</h4>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Asset Location
            </label>
            <input
              type="text"
              value={data.asset_location || ''}
              onChange={(e) => handleChange('asset_location', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="e.g., /assets/abilities/fireball.png"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Path to the ability icon or animation asset
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Monster ID (if applicable)
              </label>
              <input
                type="number"
                value={data.monster_id || 0}
                onChange={(e) => handleChange('monster_id', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                min="0"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                ID of monster that uses this ability (0 if not monster-specific)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Monster Number
              </label>
              <input
                type="number"
                value={data.monster_number || 0}
                onChange={(e) => handleChange('monster_number', parseInt(e.target.value) || 0)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                min="0"
              />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Sequence number for monster abilities
              </p>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Required Item ID (optional)
            </label>
            <input
              type="number"
              value={data.requirement_item || ''}
              onChange={(e) => handleChange('requirement_item', e.target.value ? parseInt(e.target.value) : undefined)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              min="0"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              ID of item required to use this ability (leave empty if none)
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h5 className="font-medium text-blue-800 dark:text-blue-200 mb-2">Asset Guidelines</h5>
        <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
          <li>• Use PNG format for ability icons (recommended size: 64x64px)</li>
          <li>• Store assets in the /uploads/abilities/ directory</li>
          <li>• Use descriptive filenames (e.g., fireball_icon.png)</li>
          <li>• Ensure assets are optimized for web use</li>
        </ul>
      </div>
    </div>
  );
};