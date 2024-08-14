import { Banner } from '@/components/Banner/Bannner';
import { Category } from '@/components/Category/Category';
import { data } from '../../fakedata';
import { ProductCards } from '@/components/ProductCard/ProductCard';
import { Overlay } from '@/components/Overlay';
import { Button } from '@/components/ui/button';
import { Asterisk } from 'lucide-react';
import { Celebrate, Feedback, PriceHand, TouchID } from '@/components/ui/Icons';
import { ForWho } from '@/components/ForWho/ForWho';
import { Testimonials } from '@/components/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Category></Category>

      <Overlay>
        <section className="container py-8">
          <h1 className="text-3xl font-bold">Featured Product</h1>

          <div className="grid md:grid-cols-4 gap-10 pt-10">
            {data.slice(0, 8).map(product => (
              <ProductCards key={product.id} product={product} className="bg-transparent p-0 border-0" />
            ))}
          </div>
          <div className="pt-8 flex items-center justify-center">
            <Button className="[background:linear-gradient(90deg,_#1F31FF_0%,_#87009f_73%,_#3F51B5_100%)_no-repeat_center_/_cover] text-white rounded-full" size="lg">
              View All
            </Button>
          </div>
        </section>
      </Overlay>

      <section className="pt-20 pb-6 md:h-[25rem] h-[30rem]" style={{ background: "linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('./01.jpg') no-repeat center/cover" }}>
        <div className="container flex flex-col justify-between h-full">
          <div>
            <h1 className="text-3xl font-bold text-white">Find the Right Gift for Her</h1>
            <p className="text-white pt-2 max-w-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales tristique laoreet. Vivamus iaculis iaculis dui congue lacinia.</p>
            <Button className="mt-8 bg-white rounded-full text-violet-600 hover:text-white" size="lg">
              Shop Now
            </Button>
          </div>

          <div className="flex items-center text-white text-sm">
            <span className="w-6">
              <Asterisk />
            </span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales tristique laoreet. Vivamus iaculis iaculis dui congue lacinia.</p>
          </div>
        </div>
      </section>
      <section className="container pt-16 pb-8">
        <h1 className="text-3xl font-bold">Personalised Gifts</h1>

        <div className="grid md:grid-cols-4 gap-10 pt-10">
          {data
            .slice(0, 8)
            .map(product => {
              product.isNew = Math.random() < 0.5; // Randomly assign true or false
              product.discount = Math.floor(Math.random() * 51); // Random discount between 0% and 50%
              return product;
            })
            .map(product => (
              <ProductCards key={product.id} product={product} className="bg-transparent p-0 border-0" />
            ))}
        </div>
        <div className="pt-8 flex items-center justify-center">
          <Button className="[background:linear-gradient(90deg,_#1F31FF_0%,_#87009f_73%,_#3F51B5_100%)_no-repeat_center_/_cover] text-white rounded-full" size="lg">
            View All
          </Button>
        </div>
      </section>

      <section className="container pb-6">
        <h1 className="text-3xl font-bold">For Who?</h1>
        <div className="pt-6">
          <ForWho />
        </div>
      </section>

      <Overlay>
        <section className="container py-8">
          <h1 className="text-3xl font-bold">Why Gift Valley</h1>

          <div className="grid md:grid-cols-4 gap-5 pt-10 text-center">
            <div className="py-10 border rounded-lg">
              <figure className="w-20 h-20 p-5 rounded-full bg-violet-50 border mx-auto">
                <PriceHand></PriceHand>
              </figure>
              <h1 className="text-lg pt-2 font-medium">Price Match Guarantee</h1>
            </div>

            <div className="py-10 border rounded-lg">
              <figure className="w-20 h-20 p-5 rounded-full bg-violet-50 border mx-auto">
                <Feedback />
              </figure>
              <h1 className="text-lg pt-2 font-medium">Live Chat Gift Recommendation</h1>
            </div>
            <div className="py-10 border rounded-lg">
              <figure className="w-20 h-20 p-5 rounded-full bg-violet-50 border mx-auto">
                <Celebrate />
              </figure>
              <h1 className="text-lg pt-2 font-medium">Best Curated Gifts</h1>
            </div>
            <div className="py-10 border rounded-lg">
              <figure className="w-20 h-20 p-5 rounded-full bg-violet-50 border mx-auto">
                <TouchID />
              </figure>
              <h1 className="text-lg pt-2 font-medium">Secured Payments</h1>
            </div>
          </div>
        </section>
      </Overlay>

      <section className="container pb-6">
        <h1 className="text-3xl font-bold">Happy Customers</h1>
        <Testimonials />
      </section>
    </>
  );
}
