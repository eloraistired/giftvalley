'use client';
import { cn } from '@/lib/utils';
import { useEffect, useRef, useState } from 'react';

export const CartInput = ({ children, handFormSubmit, value, currentValue, className }) => {
  const [cartValue, setCartValue] = useState(value || 0);
  const [isChanged, setIsChanges] = useState(false);
  const formRef = useRef(null);

  const disableButton = (value, min, max) => {
    if (value === min) {
      formRef.current.querySelector('.minus').style.color = '#ddd';
    } else {
      formRef.current.querySelector('.minus').removeAttribute('style');
    }

    if (value === max) {
      formRef.current.querySelector('.plus').style.color = '#ddd';
    } else {
      formRef.current.querySelector('.plus').removeAttribute('style');
    }
  };

  const handleMinMax = (event, min, max, callback) => {
    let target = event?.customTarget || event.target;
    const value = Math.max(min, Math.min(max, Number(event?.customTarget ? event.value : target.value || 0)));

    disableButton(value, min, max);

    if (target.value === '' && !event?.customTarget) {
      callback('');
      return;
    }
    callback(value);
  };

  useEffect(() => {
    disableButton(cartValue, 1, 9999);
    if (parseInt(formRef.current.quantity.value || 0) !== currentValue) setIsChanges(true);
    else setIsChanges(false);
  }, [cartValue, currentValue]);

  return (
    <form ref={formRef} onSubmit={handFormSubmit} className={cn('gap-4 grid', className)}>
      <div className="flex items-center gap-2 text-center rounded border-2 px-3 max-md:w-full">
        <span
          className="font-bold whitespace-nowrap px-4 relative cursor-pointer h-9"
          onClick={() => handleMinMax({ customTarget: formRef.current.quantity, value: parseInt(formRef.current.quantity.value || 0) - 1 }, 1, 9999, setCartValue)}
        >
          <div className='minus w-full h-full after:absolute after:content-[""] after:w-3 after:h-[2px] after:rounded-full after:left-[calc(50%-10px)] after:top-[calc(50%-1px)] after:bg-black dark:after:bg-white after:bg-current'></div>
        </span>
        <input
          onChange={e => handleMinMax(e, 1, 9999, setCartValue)}
          className="w-full text-center focus:border-violet-600 outline-none border-x-4 py-2 px-4 disabled:border-none disabled:pl-0 rounded dark:bg-[#222] dark:border-transparent dark:focus:border-dark"
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={cartValue}
        />
        <span
          className="font-bold whitespace-nowrap px-4 relative cursor-pointer h-9"
          onClick={() => handleMinMax({ customTarget: formRef.current.quantity, value: parseInt(formRef.current.quantity.value || 0) + 1 }, 1, 9999, setCartValue)}
        >
          <div className='plus w-full h-full after:absolute after:content-[""] after:w-3 after:h-[2px] after:rounded-full after:right-[calc(50%-10px)] after:top-[calc(50%-1px)] after:bg-black dark:after:bg-white before:absolute before:content-[""] before:w-[2px] before:h-3 before:rounded-full before:right-[calc(50%-5px)] before:top-[calc(50%-6px)] before:bg-black dark:before:bg-white after:bg-current before:bg-current'></div>
        </span>
      </div>
    </form>
  );
};
