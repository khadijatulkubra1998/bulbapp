import React, { Component } from 'react';
import SwitchOff from './Child/SwitchOff'
import SwitchOn from './Child/SwitchOn'
import BreakTheBulb from './Child/BreakTheBulb'
import bulboff from './Child/images/bulb off.jpg'
export class Bulb extends Component {
    constructor(props){
        super();
        this.state = {
            bulb: bulboff
          
        }
    }
    onChange (item) {
        this.setState({
            bulb: item,
        })
    }
    render() {
        return (
            <div className="main">
                <SwitchOff
                data={
                    {bulb:this.state.bulb,
                    onChange:this.onChange.bind(this)}   
                }
                />
                 <SwitchOn
                data={
                    {onChange:this.onChange.bind(this)}   
                }
                />
                 <BreakTheBulb
                data={
                    {onChange:this.onChange.bind(this)}   
                }
                />
            </div>
        );
    }
}

export default Bulb;

