import * as React from 'react';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { navigationMenuTriggerStyle } from '../ui/navigation-menu';
import { ForWho } from '../ForWho/ForWho';
import { OrderDemand } from '../OrderDemand/OrderDemand';

export const MobileMenu = () => {
  const [openItem, setOpenItem] = React.useState(null);
  const handleItemClick = item => {
    setOpenItem(openItem === item ? null : item);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="outline" className="rounded-full">
          <Menu className="w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full max-h-full overflow-y-auto" side="bottom">
        <nav className="space-y-4 pt-2">
          <Collapsible className="grid gap-2" open={openItem === 'occasion'} onOpenChange={() => handleItemClick('occasion')}>
            <CollapsibleTrigger className="flex items-center justify-between font-medium [&[data-state=open]>svg]:rotate-90">
              Occasion
              <ChevronRightIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-2 pl-4">
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
                <Link key={index} href="#" className={cn(navigationMenuTriggerStyle(), 'flex items-center justify-start gap-2 w-full')}>
                  {item}
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <OrderDemand>
            <Link href="#" className="font-medium pb-2 flex">
              On Demand Product
            </Link>
          </OrderDemand>

          <Collapsible className="grid gap-2" open={openItem === 'for-who'} onOpenChange={() => handleItemClick('for-who')}>
            <CollapsibleTrigger className="flex items-center justify-between font-medium [&[data-state=open]>svg]:rotate-90">
              For Who
              <ChevronRightIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-2">
              <ForWho className="grid-cols-2" />
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="grid gap-2" open={openItem === 'budget'} onOpenChange={() => handleItemClick('budget')}>
            <CollapsibleTrigger className="flex items-center justify-between font-medium [&[data-state=open]>svg]:rotate-90">
              Budget
              <ChevronRightIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-2 pl-4">
              {['Under S$50', 'S$50 - S$100', 'S$100 - S$150', 'S$150 And Above'].map((item, index) => (
                <Link key={index} href="#" className={cn(navigationMenuTriggerStyle(), 'flex items-center justify-start gap-2 w-full')}>
                  {item}
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Collapsible className="grid gap-2" open={openItem === 'gift-types'} onOpenChange={() => handleItemClick('gift-types')}>
            <CollapsibleTrigger className="flex items-center justify-between font-medium [&[data-state=open]>svg]:rotate-90">
              Gift Types
              <ChevronRightIcon className="h-5 w-5 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent className="grid gap-2 pl-4">
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
                <Link key={index} href="#" className={cn(navigationMenuTriggerStyle(), 'flex items-center justify-start gap-2 w-full')}>
                  {item}
                </Link>
              ))}
            </CollapsibleContent>
          </Collapsible>

          <Link href="#" className="font-medium pb-2 flex">
            Browse All Gifts
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};
