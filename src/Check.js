import React from 'react';
import './Check.css';
import Event from './Event';
import App from './App'
class Check extends React.Component {
    render() {
        //let count_end = this.props.check_count > 5 ? "Game Over" : "Counter : " + this.props.check_count;
        let count_end = this.props.check_count > 5 ? 'area2' : '';
        //let colors = count_end > 5 ? 'area2' : '';
        let count_ends = this.props.check_count > 5 ? "Game Over" : "Counter : " + this.props.check_count;
        let test = `area ${count_end}`
        return (
            <div>
                <div className={test}>
                    <h1 className={test}>{this.count_end}{count_ends}</h1>
                </div>
            </div>
        )
    }
}


export default Check;