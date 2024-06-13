import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/tr'; // Ensure Turkish language pack is loaded

const RichTextEditor = forwardRef((props, ref) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(props.initialContent || '');
  }, [props.initialContent]);

  useImperativeHandle(ref, () => ({
    getContent: () => value,
    clearContent: () => setValue(''),
  }));

  return (
    <div className="mb-20 md:mb-10">
      <CKEditor
        editor={ClassicEditor}
        config={{
          language: 'tr',
          toolbar: [
            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|', 'imageUpload', 'mediaEmbed', '|', 'undo', 'redo'
          ],
          image: {
            toolbar: [
              'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
            ]
          },
          simpleUpload: {
            uploadUrl: '/upload'  // Only necessary if you have actual upload functionality
          },
          extraPlugins: [ MyCustomUploadAdapterPlugin ]
        }}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          setValue(data);
        }}
      />
    </div>
  );
});

// Plugin to handle base64 image upload
function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file
      .then(file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
          resolve({ default: reader.result });
        };
        reader.onerror = err => {
          reject(err);
        };
        reader.readAsDataURL(file);
      }));
  }

  abort() {
    // Handle abort
  }
}

export default RichTextEditor;