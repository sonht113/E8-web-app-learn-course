import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function QuillEditor() {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: {
      toolbar: true,
      container: [
        [{ header: [1, 2, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
        ['blockquote', 'code-block'],
        ['link', 'image'],
        ['clean'],
      ],
    },
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'color',
    'background',
    'font',
    'align',
    'list',
    'bullet',
    'blockquote',
    'code-block',
    'link',
    'image',
  ];
  return (
    <ReactQuill
      value={content}
      onChange={setContent}
      modules={modules}
      formats={formats}
    />
  );
}

export default QuillEditor;
