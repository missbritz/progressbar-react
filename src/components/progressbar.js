import React, {Component} from 'react';
//import './progressbar.css';
import Buttons from './buttons';
import Handle from './handle';
import Bar from './bar';
import styled, { injectGlobal }  from 'styled-components';

injectGlobal`
    body{
        box-sizing: border-box;
    }

    .col-12{
    width: 100%;
    clear: both;
    padding: 10px;
    }

    .col-6{
    width: 50%;
    float: left;
    padding: 10px;
    }
  
`

const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 350px;
    box-sizing: border-box;
`

const Column = styled.div`
    box-sizing: border-box;
`

const Row = styled.div`
    clear: both;
    widthL 100%;
`

class ProgressBar extends Component {

    constructor (props) {
        super();
        this.updateBar = this.updateBar.bind(this)

        this.state = {
            "buttons":[],
            "bars":[],
            "limit":'',
            "active" : 0,
            "initialState" : true
        }
    }

    componentWillMount () {
        fetch('http://pb-api.herokuapp.com/bars')
            .then(response => response.json())
            .then(json => this.setState({
                buttons: json.buttons,
                bars: json.bars,
                limit: json.limit
            }))
    }

    changeBar = (barId) => {
        this.setState({
            active: barId,
            initialState: false
        });
    }

    updateBar = (barProgress) => {
        this.setState({
            bars : barProgress
        })
    }  
    
    barExceeded = () => {
        let status = this.state.progress
        if (status > 100) {
            return true;
        } else{
            return false;
        }
    }

    render () {
        return (
            <Wrapper className="progressbar">
                <Row>
                    <Column className="column col-12">
                        <Bar limit={this.state.limit} active={this.state.active} bars={this.state.bars} exceeded={this.barStatus}/>
                    </Column>
                </Row>
                <Row>
                    <Column className="column col-6">
                        {
                            this.state.buttons.map((button, i)=>{
                                return <Buttons key={i} value={button} bars={this.state.bars} active={this.state.active} progress={this.updateBar}/>
                            })
                        }
                    </Column>
                    <Column className="column col-6">
                        <Handle value={this.state.bars} active={this.changeBar}/>
                    </Column>
                </Row>
            </Wrapper>
        );
    }
    
}

export default ProgressBar;
