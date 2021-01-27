import React from 'react'
import StarfieldAnimation from 'react-starfield-animation';

export default class ThankYou extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='thankYouCont' id='thanks'>
                 <StarfieldAnimation className='starfield'
                style={{
                backgroundColor: 'black',
                position: 'absolute',
                width: '100%',
                height: 'inherit',
                margin: '0'
                }}/>
                <div className='thanksCont'>
                    <div className=' fade-in projTitle  fade-in'>
                        <h1>Thank You</h1>
                    </div>
                </div>
            </div>
        )
    }
}