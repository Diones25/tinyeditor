import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function App() {
  
  const editorRef = useRef(null);
  const returnDescription = () => {
    let description = editorRef.current.getContent();
    if (description) {
      console.log(description);
      return description
    }
  };

  return (
    <>
      <Editor
          onInit={(evt, editor) => editorRef.current = editor}
          
          init={{
          height: 300,
          menubar: false,
          plugins: [
            'a11ychecker','advlist','advcode','advtable','autolink','checklist','export',
            'lists','link','image','charmap','preview','anchor','searchreplace','visualblocks',
            'powerpaste','fullscreen','formatpainter','insertdatetime','media','table','help','wordcount'
          ],
          toolbar: 'undo redo | casechange blocks | bold italic backcolor | ' +
            'alignleft aligncenter alignright alignjustify | ' +
            'bullist numlist checklist outdent indent | removeformat | a11ycheck code table help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
          }}
      />
      <button onClick={returnDescription}>Log editor content</button>
    
    </>
  );
}