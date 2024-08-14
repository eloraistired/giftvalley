import { ArrowDown } from 'lucide-react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { DatePicker } from '../ui/date-picker';

export const ProductInput = ({ description, placeholder, isSelect, isTextArea, selectItem = [], required, subtext, className, onSelect, onInput, value, isDate, ...props }) => {
  return (
    <div className={className}>
      <h1 className="text-sm pb-2">
        {description}
        {!!required && <span className="text-red-500 text-base">*</span>}
      </h1>
      <div className="flex md:max-w-sm relative items-center">
        {!isSelect && !isTextArea && !isDate && <Input type="text" placeholder={placeholder} value={value} onInput={onInput} {...props} required={required} />}
        {!!isTextArea && <Textarea required={required} value={value} placeholder={placeholder} onInput={onInput} {...props} />}
        {!!isSelect && (
          <select
            required={required}
            defaultValue=""
            value={value}
            className="appearance-none outline-none bg-transparent border w-full py-3 px-6 text-sm z-10 cursor-pointer"
            onChange={onSelect}
            {...props}
          >
            <option disabled value="">
              {placeholder || '-- Select One --'}
            </option>
            {selectItem.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
          </select>
        )}
        {!!isSelect && (
          <div className="w-4 h-4 text-neutral-500 absolute right-6">
            <ArrowDown />
          </div>
        )}
        {!!isDate && <DatePicker className="w-full rounded-none" />}
      </div>
      {!!subtext && <p className="text-sm pt-1 text-neutral-600">{subtext}</p>}
    </div>
  );
};
