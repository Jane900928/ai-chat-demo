import React from 'react';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import App from './App';

test('renders chat interface', () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <App />
    </MockedProvider>
  );
  
  expect(screen.getByText('AI Chat Demo')).toBeInTheDocument();
  expect(screen.getByText('开始对话')).toBeInTheDocument();
});