import React, {Component} from 'react';
import axios from 'axios';
import apiEndpoint from '../../configure';
import PlaceCardComponent from "./PlaceCardComponent";
import Spinner from "../Utils/Spinner";

export default class ListPlacesComponent extends Component {
    constructor() {
        super();
        this.state = {
            places: [],
        };
    }

    componentDidMount() {
        axios
            .get(`${apiEndpoint}/api/places`)
            .then((prod) => {
                this.setState({places: prod});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const {data} = this.state.places;
        if (!data) {
            return <Spinner/>
        }
        if (data.length <= 0) {
            return <div className="text-center mt-5">No data is created yet!</div>
        }
        return (
            <div className="container-fluid mt-4">
                <div className="row d-flex justify-content-center">
                    {data.map(({id, ...otherProps}) => (
                        <PlaceCardComponent key={id} id={id} {...otherProps} />
                    ))}
                </div>
            </div>
        );
    }
}
