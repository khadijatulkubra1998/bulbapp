import { Button } from 'antd';
import 'antd/dist/antd.css';
import React, { Component } from 'react';
import bulbOff from './images/bulb off.jpg'
export class SwitchOff extends Component {
    render() {
        return (
            <div className="bulb">
                <img src={this.props.data.bulb}></img>
                <Button type="primary" onClick={() => this.props.data.onChange(bulbOff)}>Switch Off</Button>
            </div>
        );
    }
}

export default SwitchOff;

