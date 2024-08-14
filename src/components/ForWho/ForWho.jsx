import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export const ForWho = ({ className, ...props }) => {
  return (
    <div className={cn('grid md:grid-cols-5 gap-4', className)} {...props}>
      <div
        className="h-[180px] w-full flex items-center justify-center"
        style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/4_large.png) no-repeat center/cover' }}
      >
        <Button>For Her</Button>
      </div>
      <div
        className="h-[180px] w-full flex items-center justify-center"
        style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/3_large.png) no-repeat center/cover' }}
      >
        <Button>For Him</Button>
      </div>
      <div
        className="h-[180px] w-full flex items-center justify-center"
        style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/2_large.png) no-repeat center/cover' }}
      >
        <Button>For Newborn</Button>
      </div>
      <div
        className="h-[180px] w-full flex items-center justify-center"
        style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/1_large.png) no-repeat center/cover' }}
      >
        <Button>For Pets</Button>
      </div>
      <div
        className="h-[180px] w-full flex items-center justify-center"
        style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(/5_large.png) no-repeat center/cover' }}
      >
        <Button>For Kids</Button>
      </div>
    </div>
  );
};
