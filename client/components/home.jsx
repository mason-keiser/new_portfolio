import React from 'react';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='home-bg'>
                <img className='img' src='/images/landing.jpg'/>
            </div>
        )
    }
}