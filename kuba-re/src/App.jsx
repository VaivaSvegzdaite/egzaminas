import React, { Component } from 'react';
import ListComponent from './components/ListComponent';
import AdminPanel from './components/AdminPanel';
import ProductAdministrationComponent from './components/Administration';
import UnderConstruction from './components/UnderConstruction';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import DetailsPage from './components/DetailsPage';

export default class App extends Component {
  render() {
    document.title = 'greetings';
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <NavBar />
          <Switch>
            <Route path="/" exact component={ListComponent} />
            <Route path="/greetings" exact component={ListComponent} />
            <Route path="/addresses" exact component={UnderConstruction} />
            <Route path="/greetings/:id" exact component={DetailsPage} />
            <Route path="/admin" exact component={AdminPanel} />
            <Route
              path="/admin/greetings/new"
              exact
              component={ProductAdministrationComponent}
            />
            <Route
              path="/admin/greetings/:id"
              exact
              component={ProductAdministrationComponent}
            />
            <Route path="*" component={NoMatch} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

var NoMatch = (props) => {
  var goApp = () => props.history.push('/');
  return (
    <div>
      Route did not match
      <button onClick={goApp}>Go Home</button>
    </div>
  );
};
