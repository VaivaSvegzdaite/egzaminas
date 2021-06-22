import React, {Component} from 'react';
import axios from 'axios';
import apiEndpoint from '../../configure';
import CardDetailsComponent from "./CardDetailsComponent";
import Spinner from "../Utils/Spinner";

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            klientai: null
        }
    }

    componentDidMount() {
        axios
            .get(`${apiEndpoint}/api/klientai/${this.props.match.params.id}`)
            .then((res) => this.setState({klientai: res.data}))
            .catch((err) => console.log(err));
    }

    render() {
        if (this.state.klientai !== null) {
            const {id, ...otherProps} = this.state.klientai;
            return (
                <div className="container-fluid mt-5">
                    <div className="col-5" key={id}>
                        <CardDetailsComponent id={id} {...otherProps}/>
                    </div>
                </div>
            )
        } else {
            return <Spinner/>;
        }
    }
}
