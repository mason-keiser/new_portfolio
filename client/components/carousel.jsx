import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Grid from './project_grid'
import { Rec } from './viewSwitchFx';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projs: props.projects,
            activeIndex: 0
        }
        this.goToNextProj = this.goToNextProj.bind(this);
        this.goToPrevProj = this.goToPrevProj.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const bubbles = document.querySelectorAll('.viewBtn')
        for (let i = 0; i < bubbles.length; i++) {

            if (Number(bubbles[i].id) === this.state.activeIndex) {
                bubbles[i].style.background = '#393939'
            } else {
                bubbles[i].style.background = 'white'
            }
        }
    }

    componentDidUpdate() {
        const bubbles = document.querySelectorAll('.viewBtn')
        for (let i = 0; i < bubbles.length; i++) {

            if (Number(bubbles[i].id) === this.state.activeIndex) {
                bubbles[i].style.background = '#393939'
            } else {
                bubbles[i].style.background = 'white'
            }
        }
    }

    handleClick(id) {
        this.setState({
            activeIndex: Number(id)
        })
    }

    goToNextProj() {
        let index = this.state.activeIndex;
        const length = this.state.projs.length;
        if (index === length - 1) {
          index = 0;
        } else {
          index++;
        }
        this.setState({
          activeIndex: index
        });
      }

    goToPrevProj() {
        let index = this.state.activeIndex;
        const length = this.state.projs.length;
        if (index < 1) {
          index = length - 1;
        } else {
          index--;
        }
        this.setState({
          activeIndex: index
        });
      }

    render() {
        return (
            <div>
                <div className='recsRow fade-in'>
                    <div>
                        {this.state.projs.map((proj, index) =>
                        <Rec
                            className='col-10'
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            proj={proj}
                            goToNextProj={this.goToNextProj}
                            goToPrevProj={this.goToPrevProj}
                            handleClick={this.handleClick}
                        />
                        )}
                    </div>
                </div>
            </div>
        )
    }
} 