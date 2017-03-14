import React, { Component } from 'react'
import { connect } from 'react-redux';
import Counter from '../components/Counter'

class App extends Component {

    render () {
        const { store } = this.context;

        return (
            <Counter
                value={store.getState()}
                onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
                onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />
        )
    }
}

App.contextTypes = {
    store: React.PropTypes.object
};


export default App
