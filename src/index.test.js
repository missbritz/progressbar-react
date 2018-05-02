import React from 'react';
import ReactDOM from 'react-dom';
import enzyme from 'enzyme';
import { ProgressBar } from './components/progressbar';

it('fetch data to render', async ()=>{
  const barURL = 'http://pb-api.herokuapp.com/bars';
  const response = await ProgressBar.loadBarData(barURL);
  expect(result).toHaveProperty([
    'buttons',
    'bars',
    'limit'
  ]);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ProgressBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
