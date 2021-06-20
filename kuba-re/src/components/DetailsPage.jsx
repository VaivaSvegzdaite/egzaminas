import React, {Component} from 'react';
import axios from 'axios';
import apiEndpoint from '../configure';
import CardDetailsComponent from "./CardDetailsComponent";

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: null
        }
    }

    componentDidMount() {
        axios
            .get(`${apiEndpoint}/api/greetings/${this.props.match.params.id}`)
            .then((res) => this.setState({greeting: res.data}))
            .catch((err) => console.log(err));
    }

    render() {
        if (this.state.greeting !== null) {
            const {id, ...otherProps} = this.state.greeting;
            return (
                <div className="container-fluid mt-5">
                    <div className="col-5" key={id}>
                        <CardDetailsComponent id={id} {...otherProps}/>
                    </div>
                </div>
            )
        } else {
            return <div>Loading...</div>;
        }
    }
}
