// App.test.tsx
import React from 'react';
import { render } from '@testing-library/react-native';
import App from './App';

test('renderiza correctamente el componente App', () => {
  const { getByText } = render(<App />);
  expect(getByText('Mood Journal')).toBeTruthy(); // Asegúrate de que este texto exista
});
