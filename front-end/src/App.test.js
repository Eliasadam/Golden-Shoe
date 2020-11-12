import { render } from '@testing-library/react';
import App from './App';

describe('Hello', () => {
  it('should contains title', () => {
    const { getByText } = render(<App title="Golden Shoe" />);
    getByText('Golden Shoe');
  });
});
