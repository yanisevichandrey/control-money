import React, { Component } from 'react';

import './Fields.css'

class Fields extends Component {

    state = {
        fieldSum: '',
        fieldName: ''
    }

    sumHandleChange = (event) => {
        this.setState({
            fieldSum: event.target.value
        })
    }

    nameHandleChange = (event) => {
        this.setState({
            fieldName: event.target.value
        })
    }

    handleActionAdd = () => {
        if(!this.state.fieldName || !this.state.fieldSum){
            alert('Заповніть поля!')
            
            return;
        }

        const newAction = {
            id: Date.now(),
            name: this.state.fieldName,
            number: this.state.fieldSum,
            income: this.props.plus
        };

        this.props.onActionAdd(newAction);
    }

    render() {

        let title = null;

        if(this.props.plus){
            title = (
                <div className="fields_title">Додати дохід</div>
            )
        } else {
            title = (
                <div className="fields_title">Додати витрати</div>
            )
        }

        return (
            <div className="Fields">
                <div>
                    {title}
                    <div className="fields_block">
                        <input type="number" onChange={this.sumHandleChange} value={this.state.fieldSum} placeholder="Сума" />
                        <input type="text" onChange={this.nameHandleChange} value={this.state.fieldName} placeholder="Назва" />
                    </div>
                    <button onClick={this.handleActionAdd}>Add</button>
                </div>
            </div>
        )
    }
}

export default Fields;