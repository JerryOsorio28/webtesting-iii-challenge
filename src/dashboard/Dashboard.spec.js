import React from 'react';

//Import renderer from react-test-renderer library
import renderer from 'react-test-renderer';

//import Dashboard component
import Dashboard from './Dashboard';

describe ('<Dashboard />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Dashboard />).toJSON();

        expect(true).toMatchSnapshot();
    });
});