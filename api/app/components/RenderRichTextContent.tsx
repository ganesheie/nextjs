import React from 'react';


function RichTextComponent({ content }: { content: string }) {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
}

export default RichTextComponent;