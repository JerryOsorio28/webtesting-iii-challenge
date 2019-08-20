import React from 'react';

//Import renderer from react-test-renderer library
import renderer from 'react-test-renderer';

//import Dashboard component
import Controls from './Controls';

//import render from react-testing-library
import { render, fireEvent } from '@testing-library/react';

describe ('<Controls />', () => {
    it('should match snapshot', () => {
        const tree = renderer.create(<Controls />).toJSON();

        expect(true).toMatchSnapshot();
    });

    // it('button should lock when clicked', () => {
    //     const { getByText } = render(<Controls locked={ true } closed={ false }/>);

    //     fireEvent.click(getByText(/close gate/i));
    //     expect(getByText(/lock gate/i));
    //     expect(getByText(/open gate/i));
    //   });

    it('close gate', () => {
        const { getByText } = render(<Controls closed={false} locked={false}/>);

        const button = getByText(/close gate/i)

        fireEvent.click(button);
        expect(getByText(/lock gate/i));
        expect(getByText(/close gate/i));
      });

      it('lock gate', () => {
          const { getByText } = render(<Controls closed={true} locked={false} />);

          const button = getByText(/lock gate/i)
          fireEvent.click(button);
          expect(getByText(/lock gate/i));
          expect(getByText(/open gate/i));
        });
        
        it('unlock gate', () => {
            const { getByText } = render(<Controls locked={true} closed={true}/>);

            const button = getByText(/unlock gate/i)
            
            fireEvent.click(button);
            expect(getByText(/unlock gate/i));
            expect(getByText(/open gate/i));
        });
        
        it('open gate', () => {
    
            const { getByText } = render(<Controls closed={true} locked={false}/>);

            const button = getByText(/open gate/i)
    
            fireEvent.click(button);
            expect(getByText(/lock gate/i));
            expect(getByText(/open gate/i));
          });
        
});

// const Controls = props => {
//     const { locked, closed, toggleLocked, toggleClosed } = props;


