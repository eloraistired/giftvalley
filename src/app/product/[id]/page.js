import { CartInput } from '@/components/CartInput/CartInput';
import { ProductInput } from '@/components/ProductInput/ProductInput';
import { ProductSlider } from '@/components/ProductSlider/ProductSlider';
import { Rating } from '@/components/Rating/Rating';
import * as React from 'react';
import { GiftMessage } from './GiftMessage';
import { Button } from '@/components/ui/button';
import { ReviewForm } from '@/components/AddReview/AddReview';

const Product = () => {
  return (
    <section className="container py-10">
      <div className="flex md:flex-row flex-col gap-6">
        <div className="md:w-1/3">
          <div>
            <ProductSlider />
          </div>
        </div>
        <div className="md:w-2/3">
          <div>
            <div className="flex items-center gap-1 pb-2 text-sm">
              <Rating rating={4} /> 4.5 - (1000+ Reviews)
            </div>
            <h1 className="text-xl font-semibold">Personalised Gift Box For Her With Soap Roses</h1>
            <h2 className="text-violet-600 font-semibold">$ 10.00</h2>

            <div className="pt-4 space-y-4">
              <div className="flex md:items-center gap-2 max-md:flex-col">
                <div className="flex items-center gap-2">
                  <CartInput className="md:w-52" />
                  <h1>Quantity</h1>
                </div>
                <span className="max-md:hidden">-</span>
                <p className="text-blue-600 font-semibold">In Stock</p>
              </div>
              <Button>Add to Cart</Button>
              <div>
                <h1 className="border-b pb-1 mb-2 font-medium">Description</h1>
                <p className="md:max-w-xl text-neutral-500">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus iaculis iaculis dui congue lacinia. Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus iaculis iaculis
                  dui congue lacinia. Lorem ipsum dolor sit amet consectetur adipiscing elit. Vivamus iaculis iaculis dui congue lacinia.{' '}
                </p>
              </div>

              <div>
                <h1 className="border-b pb-1 mb-2 font-medium">Order Details</h1>

                <div className="space-y-4 pt-4">
                  <ProductInput description="Preferred Delivery Date" isDate required />

                  <ProductInput description="State Name On KUPA Cup (No icon & symbol)" subtext="0/5 characters" placeholder="State Name KUPA Cup" required />

                  <ProductInput description="State Name On KUPA Saucer (No icon & symbol)" subtext="0/5 characters" placeholder="State Name KUPA Saucer" required />

                  <ProductInput description="Select KUPA Set Color" isSelect selectItem={['Red', 'Green', 'Blue']} required />

                  <GiftMessage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex md:flex-row flex-col gap-6 pt-6">
        <div className="md:w-1/3">
          <ReviewForm />
        </div>
        <div className="md:w-2/3"></div>
      </div> */}
    </section>
  );
};

export default Product;
