import React from 'react';
import {Link} from 'react-router-dom'
import moment from 'moment';


const MovePrev = (props) => {

    var dateString = moment.unix(props.move.at / 1000).format("MM/DD/YYYY, h:mm a");
    return (
        <div>
            <li>
                <div>
                    <img src={props.move.pic} alt=""/>
                </div>
                <div className="prev-det">
                    <div>To: {props.move.to}</div>
                    <div>Amount: ₿{props.move.amount}</div>
                    <div>At: {dateString}</div>
                </div> 
            </li>
        </div>
    )
}

export default MovePrev;