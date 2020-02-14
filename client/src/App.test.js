import React from 'react';
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('heading is working', () => {
  const {queryByText} = render(<App />);
  const heading = queryByText(/happy building/i);
  expect(heading).not.toBeInTheDocument();
}); 
