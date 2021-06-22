import React, {Component} from 'react';
import AdminPanel from './components/Admin/AdminPanel';
import Administration from './components/Form/Administration';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/Navbar/NavBar';
import DetailsPage from './components/Card/DetailsPage';
import NoMatch from "./components/Utils/NoMatch";
import UnderConstruction from "./components/Utils/UnderConstruction";
import InventoriusComponent from "./components/Inventorius/InventoriusComponent";
import InventoriusFormComponent from "./components/Inventorius/InventoriusFormComponent";

export default class App extends Component {
    render() {
        document.title = 'SandelioValdymoSistema';
        return (
            <div>
                <BrowserRouter basename={process.env.PUBLIC_URL}>
                    <NavBar/>
                    <Switch>
                        <Route path="/klientai/admin" exact component={AdminPanel}/>
                        <Route path="/inventorius" exact component={InventoriusComponent}/>
                        <Route path="/inventorius/admin" exact component={InventoriusFormComponent}/>
                        <Route path="/ataskaitos" exact component={UnderConstruction}/>
                        <Route path="/klientai/:id" exact component={DetailsPage}/>
                        <Route
                            path="/klientai/admin/new"
                            exact
                            component={Administration}
                        />
                        <Route
                            path="/klientai/admin/:id"
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

