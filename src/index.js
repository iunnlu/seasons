import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


class App extends React.Component {

    state = { lat: null, errorMessage: '' };

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: 74 }),
            (err) => this.setState({ errorMessage: err.message })
        );
    }

    render(){    
        if(this.state.errorMessage && !this.state.lat){
            return (
                <div className="index warning">
                    <i className="massive exclamation icon" />
                    <h1>Error: {this.state.errorMessage}</h1>
                </div>    
            );
        }
        
        if(!this.state.errorMessage && this.state.lat){
            return <SeasonDisplay lat={this.state.lat} />;
        }

        return( 
            <div className="index loading">
                <i className="massive notched circle loading icon"/>
                <h1>Loading...</h1>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)