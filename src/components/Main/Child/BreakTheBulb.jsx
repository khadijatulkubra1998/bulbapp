import React, { Component } from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import brokenbulb from './images/brokenbulb.jpg'

export class BreakTheBulb extends Component {
    render() {
        return (
            <div>
                <Button type="primary" onClick={() => this.props.data.onChange(brokenbulb)}>Break Bulb</Button>
            </div>
        );
    }
}

export default BreakTheBulb;
