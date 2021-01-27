import React from 'react'
import StarfieldAnimation from 'react-starfield-animation';

export default class Segwey extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='segweyCont'>
                 <StarfieldAnimation className='starfield'
                style={{
                backgroundColor: 'black',
                position: 'absolute',
                width: '100%',
                height: 'inherit',
                margin: '0'
                }}/>
            </div>
        )
    }
}