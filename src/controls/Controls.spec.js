import React from 'react';

//Import renderer from react-test-renderer library
import renderer from 'react-test-renderer';

//import Dashboard component
import Controls from './Controls';

//import render from react-testing-library
import { render } from '@testing-library/react';

describe ('<Controls />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();

        expect(true).toMatchSnapshot();
    });
    it('button should lock when clicked', () => {
        const { getByText } = render(<Controls locked={ true } closed={ false }/>);
        expect(getByText(/lock gate/i));
        expect(getByText(/close gate/i));
      });
    
});


