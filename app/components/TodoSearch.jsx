var React = require('react');

var TodoSearch = React.createClass({

    handleSearch: function(){
        var showCompleted = this.refs.showCompleted.checked;
        var searchText = this. refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    },

    render: function(){

        return(
            <div className="row container__header">
                <div className="columns large-6">
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={this.handleSearch}/>
                </div>
                <div className="columns large-6">
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
                        <span>Show completed todos</span>
                    </label>
                </div>
            </div>
        );
    }
});

module.exports = TodoSearch;
