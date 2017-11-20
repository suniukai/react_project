import React from 'react';
import ReactDOM from 'react-dom';
import Movie from './Movie';

class HelloWorld extends React.Component {
    state = {
        counter: 0,
        user: 'Whatever'
    };

    onCounterChange = (isDecrement, e) => {
        let { counter } = this.state;
        if (isDecrement) {
            counter--;
        } else {
            counter++;
        }

        this.setState({counter});
    };

    render() {
        const {user, age} = this.props;
        return (
            <div className="wrapper">
                <h1>Hello {user} and i'm {this.props.age}</h1>
                <hr/>
                <br/>

                <h2>{this.state.counter}</h2>
                <button onClick={this.onCounterChange.bind(this, false)}>Increment</button>
                <button onClick={this.onCounterChange.bind(this, true)}>Decrement</button>
            </div>
        )
    }
}

class MovieSearch extends React.Component {
    state = {
        movie: {}
    };

    componentWillMount() {
        this.onRequest();
    }

    onUserSearch = (e) => {
        this.onRequest(e.target.value);
    };

    onRequest = (value = 'fast') => {
        fetch(`http://www.omdbapi.com/?t=${value}&apikey=969a0dc3`)
            .then(response => response.json())
            .then(json => this.setState({movie: json}))
    };

    render() {
        return (
            <div>
                <h1>Movies</h1>
                <Movie {...this.state.movie} />
                <input type="text" onChange={this.onUserSearch} />
            </div>
        )
    }
}

ReactDOM.render(<MovieSearch />, document.getElementById('root'));