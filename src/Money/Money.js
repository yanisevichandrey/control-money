import React from 'react';
import './Money.css'

const money = (props) => {
    return(
        <div className="Money">
            <div className="plus" onClick={props.onHandlePlus}>+</div>
            <div className="total">{props.total}</div>
            <div className="div" onClick={props.onHandleDiv}>-</div>
        </div>
    )
}

export default money;