import React, { Component } from 'react';
import '../App.css';

class CountSelector extends Component {
    render() {
        return (
            <div className="selector">
            <div>Pack size:</div>
            <form className="options count">
                <div className="buttonContainer">
                    <input type="radio" name="packs" id="1" value="1" className="number2" onChange={this.props.updatePackSize}/>
                        <label>1</label>
                </div>
                <div className="buttonContainer">
                    <input type="radio" name="packs" id="3" value="3" className="number2" onChange={this.props.updatePackSize}/>
                        <label>3</label>
                </div>
                <div className="buttonContainer">
                    <input type="radio" name="packs" id="6" value="5" className="number2" onChange={this.props.updatePackSize}/>
                        <label>6</label>
                </div>
                <div className="buttonContainer">
                    <input type="radio" name="packs" id="12" value="10" className="number2" onChange={this.props.updatePackSize}/>
                        <label className="doubledigit">12</label></div></form>
            </div>
        )
    }
}

export default CountSelector