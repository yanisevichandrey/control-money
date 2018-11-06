import React from 'react';
import './Filters.css'

const filters = (props) => {
    return(
        <div className="Filters">
           <button onClick={props.onAllHandler} style={{backgroundColor: props.filter === 1 ? 'rgb(45, 56, 86)' : 'rgb(152, 152, 152)'}}>Всі</button>
           <button onClick={props.onOnlyIncomeHandler} style={{backgroundColor: props.filter === 2 ? 'rgb(45, 56, 86)' : 'rgb(152, 152, 152)'}}>Тільки доходи</button>
           <button onClick={props.onOnlyCostHandler} style={{backgroundColor: props.filter === 3 ? 'rgb(45, 56, 86)' : 'rgb(152, 152, 152)'}}>Тільки витрати</button>
        </div>
    )
}

export default filters;