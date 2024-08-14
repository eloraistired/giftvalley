import Link from 'next/link';
import { Sparkle } from '../ui/Icons';
import { cn } from '@/lib/utils';

export const ProductCards = ({ product, className, ...props }) => {
  return (
    <div className={cn('p-2 h-full rounded-lg flex flex-col border bg-white relative', className)} {...props}>
      <div className="flex items-center gap-1 absolute top-2 right-2">
        {!!product?.isNew && (
          <div>
            <span className="bg-violet-50 text-violet-600 border border-violet-600 rounded px-2 py-1 font-medium text-xs">New</span>
          </div>
        )}
        {!!product?.discount && (
          <div>
            <span className="bg-red-50 text-red-600 rounded border border-red-600 px-2 py-1 font-medium text-xs">-{product?.discount}%</span>
          </div>
        )}
      </div>
      <figure className="h-72 w-full rounded-md overflow-hidden">
        <img src='/product.webp' alt="" className="object-cover" />
      </figure>

      <div className="flex items-center justify-between pt-3">
        <Link href={'/product/' + product?.id}>
          <h1 className="font-semibold">{product?.name}</h1>
        </Link>
      </div>

      <div className="text-sm flex items-center pt-1 justify-between">
        <h1>${product?.price}</h1>
      </div>
    </div>
  );
};
