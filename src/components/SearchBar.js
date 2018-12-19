import React from 'react';

class SearchBar extends React.Component{
    state = { term: '' }; 

    onFormSubmit = event => {   // solves problem of undefined state property
        event.preventDefault();

        this.props.onSubmit(this.state.term); // reference from component created in App.js
    }
 
    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input 
                            type='text'
                            value={this.state.term} // what the input is gonna show in the searchbar
                            onChange={e => this.setState({ term: e.target.value })}

                            // onChange = {(e) => console.log(e.target.value)} // alternate way of writing above 
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;