import React from 'react'

export default class About extends React.Component {
    constructor(props) {
        super(props)
        this.loadCalendar = this.loadCalendar.bind(this)
    }

    componentDidMount() {
        this.loadCalendar()
    }

    loadCalendar() {
        GitHubCalendar(".calendar", "mason-keiser", {
            summary_text: null,
            responsive: true
        })
    }


    render() {
        return(
            <div className='cont' id='about'>
                <div className='aboutCont'>
                    <div className='calendar'></div>
                </div>
            </div>
        )
    }
}