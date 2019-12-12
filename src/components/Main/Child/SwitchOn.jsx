import { Button } from 'antd';
import 'antd/dist/antd.css';
import bulbon from './images/bulb on.jpg'
import React, { Component } from 'react';
export class SwitchOn extends Component {
    render() {
        return (
            <div>
                <Button type="primary" onClick={() => this.props.data.onChange(bulbon)}>Switch On</Button>
            </div>
        );
    }
}

export default SwitchOn;
