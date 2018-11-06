import React from 'react';

import './Action.css'

const action = (props) => {

    let number = null;
    if (props.income) {
        number = (
            <div className="action_number green">+{props.number}</div>
        )
    } else {
        number = (
            <div className="action_number red">-{props.number}</div>
        )
    }

    return (
        <div className="Action">
            <div className="action_left">
                <div className="action_icon"></div>
                <div className="nameDateCol">
                    <div className="action_name">{props.name}</div>
                    <div className="action_date">{props.date}</div>
                </div>
            </div>
            <div className="action_right">
                {number}
            </div>
        </div>
    )
}

export default action;