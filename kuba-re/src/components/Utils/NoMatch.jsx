import React from 'react'

const NoMatch = (props) => {
    const goApp = () => props.history.push('/');
    return (
        <div className="container">
            <div className='m-5'>Route did not match
                <button className='btn btn-primary ml-3' onClick={goApp}>Go Home</button>
            </div>
        </div>
    )
};

export default NoMatch;