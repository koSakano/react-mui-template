import React from 'react';
import { AppProvider } from './../src/providers/app';
import { handlers } from './../src/mocks/handlers';
import { Parameters } from "@storybook/addons";
import { initialize, mswDecorator } from 'msw-storybook-addon';

initialize();

export const parameters: Parameters = {
  msw: {
    handlers: handlers,
  },
};

export const decorators = [
  mswDecorator,
  (Story) => (
    <AppProvider>
      <Story />
    </AppProvider>
  )
];
