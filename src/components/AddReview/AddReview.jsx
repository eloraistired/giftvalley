'use client';
import * as React from 'react';
import { RatingInput } from '../RatingInput/RatingInput';
import { Button } from '../ui/button';
import { FileUploader } from '../ui/file-uploader';
import { Trash2 } from 'lucide-react';
import { ImageIcon } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Textarea } from '../ui/textarea';

export const ReviewForm = () => {
  const fileTypes = ['JPEG', 'PNG', 'GIF', 'PDF', 'JPG', 'WEBP', 'AVIF'];
  const [file, setFile] = React.useState(null);
  const handleChange = file => {
    setFile(file);
  };
  const removeFile = index => {
    const newFiles = [...file];
    newFiles.splice(index, 1);
    setFile(newFiles);
  };
  return (
    <div>
      <div className="w-full px-6 py-6 bg-violet-50 rounded-lg mt-4">
        <h1 className="mb-4 text-center font-medium">Write Your Review</h1>
        <ul className="grid gap-4">
          <li>
            <div className="w-full flex items-center gap-4 py-4">
              <RatingInput className="w-full flex items-center justify-center gap-5"></RatingInput>
            </div>
          </li>
          <li>
            <h4 className="mb-4 text-sm">Review</h4>
            <div className="w-full">
              <Textarea className="bg-transparent" rows="3" type="text" name="review" placeholder="Describe your experience" />
            </div>
          </li>
          <li>
            <h4 className="mb-4 text-sm">Attachment</h4>
            <div className="w-full">
              <FileUploader currFiles={file} setFile={setFile} className="text-black dark:text-white" multiple={true} handleChange={handleChange} name="file" types={fileTypes} />
            </div>

            <div className="space-y-2 mt-6 max-h-24 md:max-h-52 overflow-hidden overflow-y-auto no-scrollbar">
              {file &&
                !!file.length &&
                Array.from(file).map((file, index) => (
                  <div key={index} className="rounded border px-4 py-2 text-sm flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div>
                        {file.type.includes('image') && <ImageIcon className="w-6 h-6" />}
                        {file.type.includes('pdf') && <FileText className="w-6 h-6" />}
                      </div>
                      {file.name}
                    </div>
                    <div>
                      <Button onClick={() => removeFile(index)} size="icon" variant="outline" className="text-red-600 hover:text-red-600">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
            </div>
          </li>
          <li>
            <div className="w-full">
              <Button className="w-full">Add Review</Button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
