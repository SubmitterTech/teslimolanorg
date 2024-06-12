import React, { forwardRef, useImperativeHandle, useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import '@ckeditor/ckeditor5-build-classic/build/translations/tr.js';  // Türkçe dil desteği

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
          language: 'tr',  // Dil ayarını Türkçe yapar
          toolbar: [
            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote', '|', 'insertTable', 'tableColumn', 'tableRow', 'mergeTableCells', '|', 'undo', 'redo'
          ],
          image: {
            toolbar: [
              'imageTextAlternative', 'imageStyle:full', 'imageStyle:side'
            ]
          },
          table: {
            contentToolbar: [
              'tableColumn', 'tableRow', 'mergeTableCells'
            ]
          }
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

export default RichTextEditor;