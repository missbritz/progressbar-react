import React, {Component} from 'react';
import styled from 'styled-components';

const Button = styled.button`
    margin: 3px;
`

class Buttons extends Component {

    constructor (props) {
        super(props);
        this.state = {
            ...this.props
        }
    }

    //Pass updated props
    componentWillReceiveProps (nextProps) {
        this.setState({
            active: nextProps.active,
            bars : nextProps.bars
        })
    }

    calculateBar = (event) => {
        let barData = this.state.bars
        let activeBar = parseInt(barData[this.state.active], 10)
        let updateBar = activeBar + parseInt(event.target.value, 10)

        //Copy bar data and assign values in array copy
        let updateProgressBar = [...this.state.bars]
        updateProgressBar[this.state.active] = updateBar
        this.setState({
            bars: updateProgressBar
        })

        //Update props
        this.props.progress(updateProgressBar)
    }

    render () {
        return (
            <Button value={this.state.value} onClick={this.calculateBar}>{this.state.value}</Button>
        )
    }
}

export default Buttons;