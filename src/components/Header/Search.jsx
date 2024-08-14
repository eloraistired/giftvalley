import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Search } from 'lucide-react';
import { Input } from '../ui/input';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt: 'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
  // More products...
];

export default function SearchProduct() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="icon" variant="outline" className="rounded-full">
          <Search className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-hidden p-0" hideCloseButton>
        <div className="flex items-center border-b px-3 relative">
          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
          <Input
            className="flex h-11 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:border-0"
            placeholder="Search Product..."
          />
          <button
            type="submit"
            class="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-violet-700 md:rounded-tr-lg border border-violet-700 hover:bg-violet-800 focus:ring-4 focus:outline-none focus:ring-violet-300 dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-violet-800"
          >
            <ArrowRight className="w-5" />
            <span class="sr-only">Search</span>
          </button>
        </div>

        <div className="space-y-3">
          {products.map(product => (
            <div key={product.id} className="flex items-center gap-x-6 rounded-lg px-4 py-2 text-sm leading-6 hover:bg-muted">
              <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-white hover:bg-neutral-50">
                <img src={product.imageSrc} alt={product.imageAlt} className="h-7 w-7 object-contain" />
              </div>
              <div className="flex-auto">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">
                  <a href={product.href}>
                    {product.name}
                  </a>
                </h3>
              </div>
              <p className="text-sm font-semibold leading-6 text-gray-900">{product.price}</p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
