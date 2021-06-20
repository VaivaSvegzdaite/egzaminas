import React, { Component } from 'react';
import axios from 'axios';
import apiEndpoint from '../configure';
import PlaceCardComponent from "./PlaceCardComponent";

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
                this.setState({ places: prod });
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { data } = this.state.places;
        console.log(data)
        if (data) {
            return (
                <div className="container-fluid mt-4">
                    <div className="row d-flex justify-content-center">
                        {data.map(({id, ...otherProps}) => (
                            <PlaceCardComponent key={id} id={id} {...otherProps} />
                        ))}
                    </div>
                </div>
            );
        } else {
            return <div>Loading...</div>;
        }
    }
}
