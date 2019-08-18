import React from 'react';
import { Component } from 'react';
import MovieDetail from './app/components/moviedetail'
import MovieHome from './app/components/moviehome'
import Nav from './app/components/navmenu'
import CastDetail from './app/components/castdetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


class App extends Component {

  constructor(props) {
    super(props);

  }
  // componentDidMount(){
  //   fetch('https://api.themoviedb.org/3/list/1?language=en-US&api_key=a4dd3127da297db79901cc021b809200')
  //   .then(res => res.json())
  //   .then(json =>{
  //     this.setState({
  //       isLoaded:true,
  //       items:json.items,
  //     })
  //   });
  // }
  render() {

    return (<Router>
              <div className="App" style={{ backgroundColor: "#f1f3f1ec" }}>
                <div><Nav /></div>
                <Switch>
                  <Route path="/" exact component={MovieHome} />
                  <Route path="/movie/:id" component={MovieDetail} />
                  <Route path="/castinfo/:id" component={CastDetail} />
                </Switch>

              </div>
            </Router>
            );

  }

  //end of render function

}

export default App;
