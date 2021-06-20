import React, {Component} from 'react';
import ListComponent from './components/ListComponent';
import AdminPanel from './components/AdminPanel';
import Administration from './components/Administration';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar';
import DetailsPage from './components/DetailsPage';
import NoMatch from "./components/NoMatch";
import ListPlacesComponent from "./components/ListPlacesComponent";

export default class App extends Component {
    render() {
        document.title = 'greetings';
        return (
            <div>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <NavBar/>
                    <Switch>
                        <Route path="/" exact component={ListComponent}/>
                        <Route path="/greetings" exact component={ListComponent}/>
                        <Route path="/places" exact component={ListPlacesComponent}/>
                        <Route path="/greetings/:id" exact component={DetailsPage}/>
                        <Route path="/admin/greetings" exact component={AdminPanel}/>
                        <Route
                            path="/admin/greetings/new"
                            exact
                            component={Administration}
                        />
                        <Route
                            path="/admin/greetings/:id"
                            exact
                            component={Administration}
                        />
                        <Route path="*" component={NoMatch}/>
                        <Route component={NoMatch}/>
                    </Switch>
                </BrowserRouter>
            </div>
        );
    }
}

