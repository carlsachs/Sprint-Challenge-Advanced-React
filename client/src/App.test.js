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
  const {getByText} = render(<App />);
  const heading = getByText(/happy building/i);
  expect(heading).toBeInTheDocument();
}); 

test('name appears on page', () => {
  const {queryByText} = render(<App />);
  const card = queryByText(/name/i);
  expect(card).not.toBeInTheDocument();
}); 


