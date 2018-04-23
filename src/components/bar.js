import React, {Component} from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: block;
    text-align: center;
    background-color: #efefef;
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    width: 100%;
    border: 1px solid #efefef;
`

const Progress = styled.div`
    background: green;
    height: 20px;
`

const Percent = styled.p`
    position: absolute;
    margin: 0;
    left: 45%;
`

class Bar extends Component {

    constructor (props) {
        super(props);
        this.state = {
            ...this.props
        }

    }
    
    componentWillReceiveProps (nextProps) {
        let newProps = {
            active: nextProps.active,
            bars: nextProps.bars,
            limit: nextProps.limit
        }
        this.setState(newProps)
        this.GetPercentage(newProps);
    }

    GetPercentage = (bar) => {
        //Set first bar value as default
        let barData = bar
        let active = bar.active
        let percent = Math.floor((barData.bars[active] / barData.limit)*100)
        this.setState({
            progress: percent
        })
    }

    render () {
        return (
            <Wrapper value={this.props.value}>
                <Percent>{this.state.progress}%</Percent>
                <Progress style={{width: ((this.state.progress < 0) ? 0 : this.state.progress) + '%'}} />
            </Wrapper>
        );
    }
}

Bar.defaultProps = {
    active : 0,
    progress: 0
}

export default Bar;