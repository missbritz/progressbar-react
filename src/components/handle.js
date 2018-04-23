import React, {Component} from 'react';
import styled from 'styled-components';

const select = styled.select`
    width: 100%;
`

class Handle extends Component {

    constructor (props) {
        super(props);
        this.state = {
            ...this.props
        }
    }

    componentWillReceiveProps (nextProps) {
        this.setState({
            value: nextProps.value
        })
    }

    //Mutate bars assign keys
    barData = () => {
        let bars = this.state.value
        bars.map((bar, key)=>{
            bar.id = key
            //TODO: Break down each array and recreate as new set
            //console.log(bar);
            return bar
        })
    }
    
    switchHandle = (event) => {
       let selected = event.target.value
       this.setState({
           active : selected
        })
        this.props.active(selected)

        //Check if components are unchanged
        if(this.props.initialState === true){
            this.props.initialState(false)
        }
    }

    render () {
        let barHandle = this.props.value
        return (
            <select name="barHandler" onChange={this.switchHandle}>
                {barHandle.map((bar, i) => {
                    return <option key={i} value={i}>ProgressBar-{i}</option>;
                })}
            </select>
            
        )
    }
}

export default Handle;