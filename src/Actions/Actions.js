import React from 'react';

import Action from './Action/Action';

const actions = (props) => {
    return(
        <div>
            {
                props.filteredActions.map(action => {
                   return <Action
                    key={action.id}
                    name={action.name}
                    income={action.income}
                    number={action.number}
                    date={action.date}/>
                })
            }
        </div>
    )
}

export default actions;