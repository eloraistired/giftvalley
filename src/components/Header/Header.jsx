'use client';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '../ui/navigation-menu';
import { usePathname, useRouter } from 'next/navigation';
import { StopCircle } from 'lucide-react';
import { CircleDotDashed } from 'lucide-react';
import { CheckCircle2 } from 'lucide-react';
import { Equal } from 'lucide-react';
import { EqualNot } from 'lucide-react';
import { TrendingDown } from 'lucide-react';
import { TrafficCone } from 'lucide-react';
import { Container } from 'lucide-react';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Truck } from 'lucide-react';
import clsx from 'clsx';
import Image from 'next/image';

import logo from './logo.png';
import { ForWho } from '../ForWho/ForWho';
import Cart from './Cart';
import SearchProduct from './Search';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Menu } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { OrderDemand } from '../OrderDemand/OrderDemand';

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between md:px-12 px-5 py-2 z-40 sticky top-0 bg-white">
      <div className="flex items-center xl:gap-4 max-md:flex-row max-md:items-center max-lg:flex-col max-lg:items-start max-lg:w-full min-w-0 gap-2">
        <h1 className="w-24">
          <Link href="/">
            <Image src={logo} alt="Gift Valley" width={100} height={100} />
          </Link>
        </h1>
        <div className="max-md:hidden flex justify-start max-lg:pb-[600px] max-lg:-mb-[600px] no-scrollbar max-lg:overflow-x-auto max-lg:w-full">
          <NavigationMenu>
            <NavigationMenuList className="space-x-0">
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger>
                  <Link href="#">Occasion</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="justify-center flex top-full">
                  <ul className="grid w-[200px] gap-3 p-2 md:w-[600px] lg:w-[600px] grid-cols-2 rounded-md border bg-popover text-popover-foreground shadow-lg">
                    {[
                      'Mooncake Festival 2024',
                      'Birthday',
                      'Anniversary',
                      'Wedding',
                      'Love & Romance',
                      'Proposal',
                      'Graduation',
                      'Cheer Up !',
                      'Congratulatory',
                      'Get Well Soon',
                      'Housewarming',
                      'Grand Opening / New Business',
                      'Farewell',
                      'Condolences',
                      'Thank You / Appreciation',
                      'Covid-19: Self Care & Stay Safe Gifts',
                    ].map((item, index) => (
                      <li key={index} className="w-full [&>a]:w-full [&>a]:text-left [&>a]:justify-start relative">
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className={cn('flex items-center gap-2', navigationMenuTriggerStyle())}>{item}</NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <OrderDemand>
                  <Link href="#" className={cn('flex items-center gap-2', navigationMenuTriggerStyle())}>
                    On Demand Product
                  </Link>
                </OrderDemand>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger>
                  <Link href="#">For Who</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="justify-center flex top-full">
                  <div className="grid w-[600px] gap-3 p-2 md:w-[700px] lg:w-[800px] rounded-md border bg-popover text-popover-foreground shadow-lg">
                    <ForWho />
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger>
                  <Link href="#">Budget</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="justify-center flex top-full">
                  <ul className="grid w-[200px] gap-3 p-2 md:w-[200px] lg:w-[300px] rounded-md border bg-popover text-popover-foreground shadow-lg">
                    {['Under S$50', 'S$50 - S$100', 'S$100 - S$150', 'S$150 And Above'].map((item, index) => (
                      <li key={index} className="w-full [&>a]:w-full [&>a]:text-left [&>a]:justify-start relative">
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className={cn('flex items-center gap-2', navigationMenuTriggerStyle())}>{item}</NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger>
                  <Link href="#">Gift Types</Link>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="justify-center flex top-full">
                  <ul className="grid w-[600px] gap-3 p-2 md:w-[700px] lg:w-[800px] grid-cols-3 rounded-md border bg-popover text-popover-foreground shadow-lg">
                    {[
                      'Personalised Gifts',
                      'Food, Snacks & Beverage',
                      'Preserved Flowers',
                      'Flower Bouquets',
                      'Flower Boxes',
                      'Flower Stands',
                      'Artificial Flowers',
                      'Artisan Cakes & Brownies',
                      'Designer Cakes',
                      'Health & Wellness',
                      'Home & Living',
                      'Baby Goods',
                      'Wine & Champagne',
                      'Chocolates',
                      'Fruit Baskets',
                      'Food Bouquets',
                      'Accessories',
                      'Stationery',
                      'Toys & Games',
                      'Soft Toys',
                      'Balloons',
                      'Macarons',
                      'Hampers',
                      'Patisserie Towers',
                      'Skincare & Cosmetics',
                      'Gift Cards & Vouchers',
                      'Experiences',
                      '[NEW] Build Your Own Gift Box',
                      'New Arrivals',
                      'Best Sellers',
                      'Exclusive Offer',
                      "Giftr's Gift Card",
                      'Giftr For Business',
                      'Corporate Gifts/Bulk Purchase',
                    ].map((item, index) => (
                      <li key={index} className="w-full [&>a]:w-full [&>a]:text-left [&>a]:justify-start relative">
                        <Link href="#" legacyBehavior passHref>
                          <NavigationMenuLink className={cn('flex items-center gap-2', navigationMenuTriggerStyle())}>{item}</NavigationMenuLink>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem className="relative">
                <Link href="#" className={cn('flex items-center gap-2', navigationMenuTriggerStyle())}>
                  Browse All Gifts
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <SearchProduct />
        <Cart />
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
