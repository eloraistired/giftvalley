import { ShoppingBag } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { XIcon } from 'lucide-react';
import { Button } from '../ui/button';

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

export default function Cart() {
  return (
    <Sheet className="relative z-10">
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="rounded-full">
          <ShoppingBag className="w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent className="max-md:w-full">
        <div className="flex h-full flex-col">
          <div className="flex-1 overflow-y-auto pr-4">
            <div className="flex items-start justify-between">
              <SheetTitle className="text-lg font-medium text-gray-900">Shopping cart</SheetTitle>
            </div>

            <div className="mt-8">
              <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                  {products.map(product => (
                    <li key={product.id} className="flex py-6">
                      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img alt={product.imageAlt} src={product.imageSrc} className="h-full w-full object-cover object-center" />
                      </div>

                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h3>
                              <a href={product.href}>{product.name}</a>
                            </h3>
                            <p className="ml-4">{product.price}</p>
                          </div>
                          <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Qty {product.quantity}</p>

                          <div className="flex">
                            <button type="button" className="font-medium text-violet-600 hover:text-violet-500">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pr-4 pt-4">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>$262.00</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
            <div className="mt-6">
              <a href="#" className="flex items-center justify-center rounded-md border border-transparent bg-violet-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-violet-700">
                Checkout
              </a>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                or{' '}
                <SheetClose type="button" className="font-medium text-violet-600 hover:text-violet-500">
                  Continue Shopping
                  <span aria-hidden="true"> &rarr;</span>
                </SheetClose>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
