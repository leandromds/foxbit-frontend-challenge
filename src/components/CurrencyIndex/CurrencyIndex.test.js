import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import MockTheme from '../../__mocks__/theme';
import CurrencyIndex from './';

describe('CurrencyIndex Component', () => {
  test('Only test', () => {
    const { getByText } = render(
      <MockTheme>
        <CurrencyIndex currIndex={0.6847}/>
      </MockTheme>
    );

    screen.debug();
    
    expect(getByText('0,68%')).toBeInTheDocument();
  });
});