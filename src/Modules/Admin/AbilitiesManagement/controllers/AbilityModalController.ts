import { useState } from 'react';
import { AbilityModel } from '@core/Model/Ability';
import { TableApi } from '@core/api/tableApi';
import { AbilityDTOFromApi } from '@core/Model/Ability';

const abilityApi = new TableApi<AbilityDTOFromApi, AbilityModel>({
  basePath: '/api/abilities',
  tableName: 'abilities'
});

export type AbilityModalTab = 'basic' | 'stats' | 'requirements' | 'elements' | 'asset';

export interface AbilityModalState {
  activeTab: AbilityModalTab;
  abilityData: Partial<AbilityModel>;
  loading: boolean;
  errors: Record<string, string>;
}

export class AbilityModalController {
  private setState: React.Dispatch<React.SetStateAction<AbilityModalState>>;
  
  constructor(setState: React.Dispatch<React.SetStateAction<AbilityModalState>>) {
    this.setState = setState;
  }

  setActiveTab(tab: AbilityModalTab) {
    this.setState(prev => ({ ...prev, activeTab: tab }));
  }

  updateAbilityData(data: Partial<AbilityModel>) {
    this.setState(prev => ({ ...prev, abilityData: { ...prev.abilityData, ...data } }));
  }

  setAbilityData(data: Partial<AbilityModel>) {
    this.setState(prev => ({ ...prev, abilityData: data }));
  }

  initializeAbility(ability?: AbilityModel | null) {
    if (ability) {
      this.setAbilityData(ability);
    } else {
      this.setAbilityData({
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
    this.setState(prev => ({ ...prev, activeTab: 'basic', errors: {} }));
  }

  validateAbility(data: Partial<AbilityModel>): Record<string, string> {
    const errors: Record<string, string> = {};

    if (!data.name?.trim()) {
      errors.name = 'Name is required';
    }

    if (!data.category) {
      errors.category = 'Category is required';
    }

    if (data.tier && (data.tier < 1 || data.tier > 10)) {
      errors.tier = 'Tier must be between 1 and 10';
    }

    return errors;
  }

  async saveAbility(ability?: AbilityModel | null): Promise<boolean> {
    try {
      this.setState(prev => ({ ...prev, loading: true, errors: {} }));
      
      const errors = this.validateAbility(this.getAbilityData());
      if (Object.keys(errors).length > 0) {
        this.setState(prev => ({ ...prev, errors, loading: false }));
        return false;
      }

      if (ability?.id) {
        await abilityApi.update([{ id: ability.id, status: '=' }], this.getAbilityData());
      } else {
        await abilityApi.create(this.getAbilityData());
      }
      
      this.setState(prev => ({ ...prev, loading: false }));
      return true;
    } catch (error) {
      console.error('Failed to save ability:', error);
      this.setState(prev => ({ 
        ...prev, 
        loading: false, 
        errors: { general: 'Failed to save ability. Please try again.' }
      }));
      return false;
    }
  }

  private getAbilityData(): Partial<AbilityModel> {
    // This would be accessed through state in the actual implementation
    // For now, we'll return an empty object as this is just the controller logic
    return {};
  }
}

export const useAbilityModalController = () => {
  const [state, setState] = useState<AbilityModalState>({
    activeTab: 'basic',
    abilityData: {},
    loading: false,
    errors: {}
  });

  const controller = new AbilityModalController(setState);

  return {
    state,
    controller
  };
};