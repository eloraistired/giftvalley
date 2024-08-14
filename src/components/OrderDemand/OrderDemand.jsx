import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { useState } from 'react';

import { ImageIcon } from 'lucide-react';
import { Trash } from 'lucide-react';
import { FileText } from 'lucide-react';
import { FileUploader } from '../ui/file-uploader';
import { BudgetSlider } from '../BudgetSlider/BudgetSlider';
import { DatePicker } from '../ui/date-picker';
import { Textarea } from '../ui/textarea';

export const OrderDemand = ({ children }) => {
  const fileTypes = ['JPEG', 'PNG', 'GIF', 'PDF', 'JPG', 'WEBP', 'AVIF'];
  const [file, setFile] = useState(null);
  const handleChange = file => {
    setFile(file);
  };
  const removeFile = index => {
    const newFiles = [...file];
    newFiles.splice(index, 1);
    setFile(newFiles);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-h-screen-compatiblity flex flex-col justify-start overflow-y-auto rounded-none sm:rounded-none lg:max-w-6xl" onPointerDownOutside={e => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Fill in the details</DialogTitle>

          <div className="space-y-4">
            <div className="pt-4 grid gap-4 lg:grid-cols-2">
              <div>
                <Label htmlFor="reference" className="pb-2 block font-medium">
                  Name
                </Label>
                <Input id="name" placeholder="Enter Your Name" className="w-full" />
              </div>

              <div>
                <Label htmlFor="number" className="pb-2 block font-medium">
                  Phone Number
                </Label>
                <Input id="number" type="number" placeholder="Enter Your Number" className="w-full" />
              </div>

              <div>
                <Label htmlFor="delivery" className="pb-2 block font-medium">
                  Delivery Address
                </Label>
                <Input id="delivery" placeholder="Enter Your Address" className="w-full" />
              </div>
              <div>
                <Label htmlFor="receiver" className="pb-2 block font-medium">
                  Receiver Phone Number
                </Label>
                <Input id="receiver" type="number" placeholder="Enter Receiver Number" className="w-full" />
              </div>
              <div>
                <Label htmlFor="product" className="pb-2 block font-medium">
                  Product Name
                </Label>
                <Input id="product" placeholder="Enter Product Name" className="w-full" />
              </div>
              <div>
                <Label htmlFor="quantity" className="pb-2 block font-medium">
                  Quantity
                </Label>
                <Input id="quantity" type="number" placeholder="Enter Quantity" className="w-full" />
              </div>
              <div>
                <Label htmlFor="delivery" className="pb-2 block font-medium">
                  Preffered Delivery Date
                </Label>
                <DatePicker className="w-full rounded-none" />
              </div>

              <div>
                <Label htmlFor="budget" className="pb-2 block font-medium">
                  Budget Range
                </Label>
                <BudgetSlider />
              </div>
            </div>
            <div>
              <Label htmlFor="notes" className="pb-2 block font-medium">
                Order Notes
              </Label>
              <Textarea id="notes" placeholder="Enter Notes" className="w-full" />
            </div>

            <div className="input-file">
              <Label htmlFor="reference" className="sr-only">
                Attachment
              </Label>
              <FileUploader currFiles={file} setFile={setFile} className="text-black dark:text-white" multiple={true} handleChange={handleChange} name="file" types={fileTypes} />

              <div className="space-y-2 mt-6 max-h-24 md:max-h-52 overflow-hidden overflow-y-auto no-scrollbar">
                {file &&
                  !!file.length &&
                  Array.from(file).map((file, index) => (
                    <div key={index} className="rounded border p-4 text-sm flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="text-primary">
                          {file.type.includes('image') && <ImageIcon className="w-6 h-6" />}
                          {file.type.includes('pdf') && <FileText className="w-6 h-6" />}
                        </div>
                        {file.name}
                      </div>
                      <div>
                        <Button onClick={() => removeFile(index)} size="icon" variant="outline" className="text-red-600 hover:text-red-600">
                          <Trash className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
