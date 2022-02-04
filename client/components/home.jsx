import React from 'react';
import StarfieldAnimation from 'react-starfield-animation';

export default class Home extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        // In the future come back and make this work on an infinite loop

        const time = setTimeout(() => {
            let h4 = document.getElementById('textTrans')
            h4.textContent = 'Business Systems Analyst';
            h4.classList.remove('animateT');
            void h4.offsetWidth;
            h4.classList.add('animateText');
            setTimeout(() => {
                h4.textContent = 'Web Developer';
                h4.classList.remove('animateText');
                void h4.offsetWidth;
                h4.classList.add('animateTe');
                setTimeout(() => {
                    h4.textContent = 'Programmer';
                    h4.classList.remove('animateTe');
                    void h4.offsetWidth;
                    h4.classList.add('animateTex');
                    setTimeout(() => {
                        h4.textContent= 'Software Engineer';
                        h4.classList.remove('animateTex');
                        void h4.offsetWidth;
                        h4.classList.add('animateT')
                    },6000)
                },6000)
            }, 6000)
        }, 6000)

        return (
            <div className='home-bg' id='home'>
                  <StarfieldAnimation className='starfield'
               style={{
               backgroundColor: 'black',
               position: 'absolute',
               width: '100%',
               height: '100%',
               margin: '0'
          }}/>
                <div className='nameContainer'>
                    <h1>Mason Keiser</h1>
                    <h4 className='animateT' id = 'textTrans'>Software Engineer</h4>
                </div>
            </div>
        )
    }
}