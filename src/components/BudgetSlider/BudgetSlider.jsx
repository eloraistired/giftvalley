'use client';

import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';

export const BudgetSlider = () => {
  const [minBudget, setMinBudget] = useState(0);
  const [maxBudget, setMaxBudget] = useState(1000);
  useEffect(() => {
    setMinBudget(Math.max(0, minBudget));
  }, [minBudget]);
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex items-center gap-1">
        <span className="font-medium">$</span>
        <Input type="number" value={minBudget} onChange={e => setMinBudget(Math.max(0, Number(e.target.value)))} className="w-16 p-1 h-auto" />
      </div>
      <Slider
        min={0}
        max={1000}
        step={1}
        value={[minBudget, maxBudget]}
        onValueChange={([min, max]) => {
          setMinBudget(min);
          setMaxBudget(max);
        }}
        className="w-full"
        thumbClassName="bg-white border-2 border-primary w-5 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-primary"
        trackClassName="bg-muted h-2 rounded-full"
        snapToPoints={false}
      />
      <div className="flex items-center gap-1">
        <span className="font-medium">$</span>
        <Input type="number" value={maxBudget} onChange={e => setMaxBudget(Number(e.target.value))} className="w-16 p-1 h-auto" />
      </div>
    </div>
  );
};
