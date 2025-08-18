import React, { useState, useEffect } from 'react';
import { Modal } from '@core/ui/Modal';
import { Button } from '@core/ui/Button';
import { AbilityModel } from '@core/Model/Ability';
import { AbilityBasicTab } from './AbilityBasicTab';
import { StatsInputGroup } from '../AdminCommonComponents/StatsInputGroup';
import { ElementsInputGroup } from '../AdminCommonComponents/ElementsInputGroup';
import { AbilityAssetTab } from './AbilityAssetTab';
import { useAbilityModalController } from './controllers/AbilityModalController';
import { AbilityInputController } from './controllers/AbilityInputController';

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
  const { state, controller } = useAbilityModalController();

  useEffect(() => {
    controller.initializeAbility(ability);
  }, [ability, isOpen]);

  const handleSave = async () => {
    const success = await controller.saveAbility(ability);
    if (success) {
      onSave();
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
                onClick={() => controller.setActiveTab(tab.id as any)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  state.activeTab === tab.id
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
          {state.errors.general && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md">
              <p className="text-sm text-red-600">{state.errors.general}</p>
            </div>
          )}

          {state.activeTab === 'basic' && (
            <AbilityBasicTab
              data={state.abilityData}
              onChange={controller.updateAbilityData.bind(controller)}
              errors={state.errors}
            />
          )}

          {state.activeTab === 'stats' && (
            <div className="space-y-6">
              <StatsInputGroup
                data={state.abilityData}
                onChange={controller.updateAbilityData.bind(controller)}
                jsonFieldKey="basic_stats"
                title="Basic Stats"
                description="Base statistical bonuses provided by this ability"
              />
            
              <StatsInputGroup
                data={state.abilityData}
                onChange={controller.updateAbilityData.bind(controller)}
                jsonFieldKey="requirement_stats"
                title="Requirement Stats"
                description="Minimum stats required to use this ability"
              />
            </div>
          )}

          {state.activeTab === 'elements' && (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <ElementsInputGroup
      data={state.abilityData}
      onChange={controller.updateAbilityData.bind(controller)}
      jsonFieldKey="element_mastery"
      title="Element Mastery"
      description="Elemental mastery bonuses provided by this ability"
    />
    <ElementsInputGroup
      data={state.abilityData}
      onChange={controller.updateAbilityData.bind(controller)}
      jsonFieldKey="element_resistance"
      title="Element Resistance"
      description="Elemental resistance bonuses provided by this ability"
    />
    <ElementsInputGroup
      data={state.abilityData}
      onChange={controller.updateAbilityData.bind(controller)}
      jsonFieldKey="requirement_element_mastery"
      title="Required Element Mastery"
      description="Minimum elemental mastery required to use this ability"
    />
    <ElementsInputGroup
      data={state.abilityData}
      onChange={controller.updateAbilityData.bind(controller)}
      jsonFieldKey="requirement_element_resistance"
      title="Required Element Resistance"
      description="Minimum elemental resistance required to use this ability"
    />
  </div>
)}


          {state.activeTab === 'asset' && (
            <AbilityAssetTab
              data={state.abilityData}
              onChange={controller.updateAbilityData.bind(controller)}
            />
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} loading={state.loading}>
            {ability ? 'Update' : 'Create'} Ability
          </Button>
        </div>
      </div>
    </Modal>
  );
};