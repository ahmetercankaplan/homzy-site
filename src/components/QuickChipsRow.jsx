import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';
import { Sparkles, TreePine, Car, Dog, Sofa, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const QuickChipsRow = ({ filters, onFilterChange }) => {
  const { t } = useTranslation();

  const chips = [
    {
      key: 'furnished',
      label: t('quickChips.furnished', 'Furnished'),
      icon: Sofa,
      filterKey: 'furnished',
      value: true
    },
    {
      key: 'balcony_garden',
      label: t('quickChips.garden', 'Garden/Balcony'),
      icon: TreePine,
      filterKey: 'balcony_garden',
      value: true
    },
    {
      key: 'parking',
      label: t('quickChips.parking', 'Parking'),
      icon: Car,
      filterKey: 'parking',
      value: true
    },
    {
      key: 'pets',
      label: t('quickChips.petFriendly', 'Pet Friendly'),
      icon: Dog,
      filterKey: 'pets_allowed',
      value: true
    },
    {
      key: 'new',
      label: t('quickChips.newBuild', 'New Build'),
      icon: Sparkles,
      filterKey: 'featured',
      value: true
    },
    {
      key: 'energy',
      label: t('quickChips.highEPC', 'High EPC'),
      icon: Zap,
      filterKey: 'energy_rating',
      value: 'A'
    },
    {
      key: 'student',
      label: t('quickChips.studentFriendly', 'Student Friendly'),
      icon: Sofa,
      filterKey: 'student_friendly',
      value: true
    }
  ];

  const isActive = (chip) => {
    if (chip.filterKey === 'energy_rating') {
      return filters[chip.filterKey] === 'A' || filters[chip.filterKey] === 'B';
    }
    return filters[chip.filterKey] === chip.value;
  };

  const handleChipClick = (chip) => {
    const active = isActive(chip);
    onFilterChange(chip.filterKey, active ? null : chip.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      data-testid="quick-chips-row"
      className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide"
      style={{ 
        scrollbarWidth: 'none', 
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch'
      }}
    >
      {chips.map((chip, index) => {
        const Icon = chip.icon;
        const active = isActive(chip);
        return (
          <button
            key={chip.key}
            onClick={() => handleChipClick(chip)}
            data-testid={`chip-${chip.key}`}
            className={`
              flex items-center justify-center gap-2
              h-[44px] px-4 rounded-full whitespace-nowrap
              transition-all duration-200 ease-in-out
              text-sm font-medium shadow-sm
              ${active 
                ? 'bg-[#EEF2FF] text-[#4338CA] border border-[#6366F1]' 
                : 'bg-white text-[#0F172A] border border-[#E5E7EB] hover:bg-[#F5F7FF] hover:border-[#C7D2FE]'
              }
            `}
            style={{ minWidth: 'fit-content' }}
          >
            <Icon 
              className={`w-4 h-4 transition-all ${active ? 'fill-current' : ''}`} 
              strokeWidth={active ? 2 : 1.5}
            />
            <span className="text-sm">{chip.label}</span>
          </button>
        );
      })}
    </motion.div>
  );
};

export default QuickChipsRow;
