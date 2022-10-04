import React from 'react';
import { AppProvider } from './../src/providers/app';

export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
    </AppProvider>
  )
];
