import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Base64UploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/base64uploadadapter';

export default class ClassicEditor extends ClassicEditorBase {}

ClassicEditor.builtinPlugins = [
  Essentials,
  Autoformat,
  Bold,
  Italic,
  BlockQuote,
  Heading,
  Image,
  ImageCaption,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Link,
  List,
  Paragraph,
  Table,
  TableToolbar,
  MediaEmbed,
  Base64UploadAdapter
];

ClassicEditor.defaultConfig = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      'blockQuote',
      '|',
      'insertTable',
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      '|',
      'imageUpload',  // Resim yükleme butonunu ekleyin
      'mediaEmbed',
      '|',
      'undo',
      'redo'
    ]
  },
  language: 'tr',
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:full',
      'imageStyle:side'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells'
    ]
  }
};