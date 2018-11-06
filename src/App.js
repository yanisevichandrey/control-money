import React, { Component } from 'react';
import './App.css';

import Money from './Money/Money';
import Fields from './Fields/Fields';
import Actions from './Actions/Actions';
import Filters from './Filters/Filters'

class App extends Component {

  state = {
    total: 0,
    plus: true,
    div: false,
    actions: [],
    filteredActions: [],
    filter: 1
  }


  componentDidMount() {
    const savedActions = JSON.parse(localStorage.getItem('actions'));
    const total = localStorage.getItem('total')

    if(savedActions) {
      this.setState({ filteredActions: savedActions, actions: savedActions, total })
    }

  }

  componentDidUpdate(prevState, prevProps) {
    if(prevState.actions !== this.state.actions) {
      this.saveToLocalStarage()
    }
  }

  handleAdd = newAction => {
    const actions = [newAction, ...this.state.actions];
    this.setState({
      actions,
      filteredActions: actions,
      total: this.sum(actions)
    });
  }

  handlePlus = () => {
    this.setState({ plus: true, div: false })
  }

  handleDiv = () => {
    this.setState({ plus: false, div: true })
  }

  sum(actions) {
    const total = actions.reduce((sum, item) => sum + (item.income ? +item.number : -+item.number), 0);
    return total;
  }

  saveToLocalStarage = () => {
    const actions = JSON.stringify(this.state.actions)
    const total = this.state.total;

    localStorage.setItem('actions', actions)
    localStorage.setItem('total', total)
  }

  onlyIncomeHandler = () => {
    let filteredActions = this.state.actions.filter(action => {
      return action.income === true;
    })
    this.setState({filteredActions: filteredActions, filter: 2})
  }

  onlyCostHandler = () => {
    let filteredActions = this.state.actions.filter(action => {
      return action.income === false;
    })
    this.setState({filteredActions: filteredActions, filter: 3})
  }

  allHandler = () => {
    const actions = this.state.actions;
    this.setState({filteredActions: actions, filter: 1})
  }


  render() {
    return (
      <div className="App">
        <Money
          onHandlePlus={this.handlePlus}
          onHandleDiv={this.handleDiv}
          total={this.state.total} />
        <Filters 
          onOnlyIncomeHandler={this.onlyIncomeHandler}
          onOnlyCostHandler={this.onlyCostHandler}
          onAllHandler={this.allHandler}
          filter={this.state.filter}/>
        <Fields
          onActionAdd={this.handleAdd}
          plus={this.state.plus}
          div={this.state.div} />
        <Actions
          actions={this.state.actions}
          filteredActions={this.state.filteredActions} />
      </div>
    );
  }
}

export default App;
