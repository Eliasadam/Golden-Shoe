import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProductContents from './ProductContents';

afterEach(cleanup);
const contents = {
    src: "https://www.upsieutoc.com/images/2020/06/27/img1.jpg",
    content: "nike balance",
    price: 23,
    colors: ["red", "black", "crimson", "teal"]
};

describe('This suit is to test the ProductContents component', () => {
    test('Snapshot of ProductContents', () => {
      const { asFragment } = render(<ProductContents />);
      expect(asFragment()).toMatchSnapshot();
    });
    test("finding title with TestId", () => {
        const { getByTestId } = render(<ProductContents contents={contents}/>);
        const card = getByTestId("card");
      expect(card).toBeDefined();
    });
  });
  