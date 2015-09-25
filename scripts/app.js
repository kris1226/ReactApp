'use strict';
let React = window.React = require('react');
let Timer = require("./ui/Timer");
let mountNode = document.getElementById("app");
let Dropdown = require("react-dropdown");

let TodoApp = React.createClass({
  loadData: function() {
    $.ajax({
      url: '/api/clients',
      dataType: 'json',
      success: function(data) {
        this.setState({data: data});
      }.bind(this),
      error: function(xhr, status, err) {
        console.error('#GET Error', status, err.toString());
      }.bind(this)
    });
  },
  getInitialState: function() {
    return {
      items: [],
      data: [],
      selected: {
        value: 'clientkey',
        label: 'clientname'
      }
    };
  },
  componentDidMount: function() {
    this.loadData();
  },
  onChange: function(event) {
    this.setState({text: event.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    let nextItems = this.state.items.concat([this.state.text]);
    let nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  onSelect: function(option) {
    console.log('You selected', option.label);
    this.setState({
      selected: option
    });
  },
  render: function() {
    let clients = this.state.data || [];
    let defaultOption = this.state.selected;
    return (
      <div>
        <h3>TODO App</h3>
          <Timer />
          <TodoList items={this.state.items} />
          <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
        <ol>
          {clients.map(function(client) {
            return <Dropdown key={client.ClientKey} options={client.ClientName} value={defaultOption}/>
          })}
        </ol>
      </div>
    );
  }
});

let TodoList = React.createClass({
  render: function() {
    let createItem = function(itemText) {
      return(
        <li>{itemText}</li>
      );
    };
    return (
      <ul>{this.props.items.map(createItem)}</ul>
    );
  }
});

React.render(<TodoApp />, mountNode);
