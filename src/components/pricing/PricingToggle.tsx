import React from 'react';

interface PricingToggleProps {
  isAnnual: boolean;
  onChange: (value: boolean) => void;
}

export function PricingToggle({ isAnnual, onChange }: PricingToggleProps) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className={`text-sm ${!isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
        Monthly billing
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={isAnnual}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${
          isAnnual ? 'bg-indigo-600' : 'bg-gray-200'
        }`}
        onClick={() => onChange(!isAnnual)}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isAnnual ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
      <div className="flex items-center gap-1.5">
        <span className={`text-sm ${isAnnual ? 'font-semibold text-gray-900' : 'text-gray-500'}`}>
          Annual billing
        </span>
        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
          Save 20%
        </span>
      </div>
    </div>
  );
}