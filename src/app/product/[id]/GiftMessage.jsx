'use client';
import { ProductInput } from '@/components/ProductInput/ProductInput';
import * as React from 'react';

const templateText = [
  {
    template: 'Happy Birthday',
    text: `Dear  ,

Happiest of birthdays! May you have a blessed year ahead and endless happiness.

From:`,
  },
  {
    template: 'Happy Anniversary',
    text: `Dear  ,

Happy Anniversary, with all my love, to the strongest, kindest, funniest, best person I know ❤️ 

From:`,
  },
  {
    template: 'Apologize',
    text: `Dear  ,

I may not be as wise as you but I am wise enough to see the damage I have caused to our friendship. I know you will forgive me in the end but I am really sorry!

From:`,
  },
];
export const GiftMessage = () => {
  const [template, setTemplate] = React.useState('Write your own');
  const [text, setText] = React.useState('');
  return (
    <>
      <ProductInput
        description="Message Template"
        isSelect
        selectItem={['Write your own', 'Happy Birthday', 'Happy Anniversary', 'Apologize']}
        required
        onSelect={e => {
          setTemplate(e.target.value);
          setText(templateText.find(t => t.template === e.target.value)?.text || '');
          
        }}
      />
      <ProductInput description="Message" placeholder="Message" onInput={e => setText(e.target.value)} value={text} isTextArea required />
    </>
  );
};
