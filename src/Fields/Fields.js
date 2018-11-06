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
        if (!this.state.fieldName || !this.state.fieldSum) {
            alert('Заповніть поля!')

            return;
        }

        let date = new Date()
        let date_h = date.getHours()
        date_h < 10 ? date_h = '0' + date_h : date_h = date_h;
        let date_m = date.getMinutes()
        date_m < 10 ? date_m = '0' + date_m : date_m = date_m;
        let date_s = date.getSeconds()
        date_s < 10 ? date_s = '0' + date_s : date_s = date_s;
        let date_day = date.getDay()
        date_day < 10 ? date_day = '0' + date_day : date_day = date_day;
        let date_month = date.getMonth()
        date_month < 10 ? date_month = '0' + date_month : date_month = date_month;
        let date_year = date.getFullYear()
        let fullDate = date_h + ':' + date_m + ':' + date_s + ' ' + date_day + '.' + date_month + '.' + date_year


        const newAction = {
            id: Date.now(),
            name: this.state.fieldName,
            number: this.state.fieldSum,
            income: this.props.plus,
            date: fullDate
        };

        this.props.onActionAdd(newAction);
        this.resetStateHandler()
    }

    resetStateHandler = () => {
        this.setState({fieldSum: '', fieldName: ''})
    }

    render() {

        let title = null;

        if (this.props.plus) {
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