import React from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import Grid from './project_grid'
import { NextArrow, BackArrow, Rec } from './viewSwitchFx';

export default class Carousel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            projs: props.projects,
            activeIndex: 0
        }
        this.goToNextRec = this.goToNextRec.bind(this);
        this.goToPrevRec = this.goToPrevRec.bind(this);
    }

    goToNextRec() {
        let index = this.state.activeIndex;
        const length = this.state.projs.length;
        if (index === length - 1) {
          this.shuffleRecArray();
          index = 0;
        } else {
          index++;
        }
        this.setState({
          activeIndex: index
        });
      }

    goToPrevRec() {
        let index = this.state.activeIndex;
        const length = this.state.projs.length;
        if (index < 1) {
          this.shuffleRecArray();
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
                <div className='recsRow mb-5'>
                    <div style={{ width: "100%", margin: "auto"}}>
                        {this.state.projs.map((rec, index) =>
                        <Rec
                            className='col-10'
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            rec={rec}
                        />
                        )}
                    </div>
                    <div className='d-flex flex-row'>
                        <BackArrow className='col-1 ar m-2' goToPrevRec={() => this.goToPrevRec()}/>
                        <NextArrow className='col-1 ar m-2' goToNextRec={() => this.goToNextRec()}/>
                    </div>
                </div>
            </div>
        )
    }
} 