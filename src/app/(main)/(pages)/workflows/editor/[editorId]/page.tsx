import { ConnectionsProvider } from '@/providers/connections-provider';
import EditorProvider from '@/providers/editor-provider';
import React from 'react'
import EditorCanvas from './_components/editor-canvas';

type Props = {}

const page = (props: Props) => {
  return (
    <EditorProvider>
      <ConnectionsProvider>
        <EditorCanvas />
      </ConnectionsProvider>
    </EditorProvider>
  );
}

export default page