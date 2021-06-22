import React from 'react';
import spinner from './Spinner.gif';

const Spinner = () => (
    <React.Fragment>
        <img
            src={spinner}
            style={{width: '200px', margin: 'auto', display: 'block'}}
            alt="Loading..."
        />
    </React.Fragment>
);
export default Spinner