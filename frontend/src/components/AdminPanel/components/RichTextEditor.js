import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const RichTextEditor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: [
      [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' },
      { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      [{ 'color': [] }, { 'background': [] }],
      ['clean']
    ],
  };

  return (
    <div className="mb-20 md:mb-10">
      <ReactQuill 
        value={value} 
        onChange={setValue} 
        modules={modules} 
        className="-z-10 h-[400px]"
      />
    </div>
  );
};

export default RichTextEditor;
