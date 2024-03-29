"use strict";

var React = require('react');
var Router = require('react-router');
var Link = require('react-router').Link;
var AuthorList = require('./authorList');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');

var AuthorPage = React.createClass({

  getInitialState: function() {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  //hooking to store events
  componentWillMount: function() {
    AuthorStore.addChangeListener(this._onChange);
  },

  //clean up
  componentWillUpdate: function() {
    AuthorStore.removeChangeListener(this._onChange);
  },


  _onChange: function() { //to update state when the store changes
    this.setState({ authors: AuthorStore.getAllAuthors() });
  },

  render: function() {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="author" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors}/>
      </div>
    );
  }

});

module.exports = AuthorPage;
