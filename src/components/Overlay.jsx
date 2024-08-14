import { cn } from '@/lib/utils';
import * as React from 'react';
export const Overlay = React.forwardRef(({ className, ...props }, ref) => (
  <div
    className={cn('[background:linear-gradient(0deg,rgba(11,11,18,0.00)_0%,rgba(11,11,18,0.05)_17.63%,rgba(11,11,18,0.05)_71.99%,rgba(11,11,18,0.00)_96.88%)]', className)}
    {...props}
    ref={ref}
  ></div>
));

Overlay.displayName = 'Overlay';
