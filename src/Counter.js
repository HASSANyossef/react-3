import React, { Component } from 'react';


class Counter extends Component
{
    state = {
        value: 0,
    };

    Increament = () =>
    {
        this.setState({
            value: this.state.value + 1,
            
        });
    };

    Decreament = () =>
    {
        this.setState({
            value: this.state.value - 1 < 0 ? 0 : this.state.value - 1,
        });
    };


    render() {
        return(
            <div>
                <button onClick={this.Increament}>increse</button>
                {this.state.value}
                <button onClick={this.Decreament}>decrese</button>
            </div>
        );
    }
}

export default Counter
