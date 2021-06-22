import React, {Component} from 'react';
import axios from 'axios';
import apiEndpoint from '../../configure';
import InventoriusCardComponent from "./InventoriusCardComponent";
import Spinner from "../Utils/Spinner";

export default class InventoriusComponent extends Component {
    constructor() {
        super();
        this.state = {
            inventorius: [],
        };
    }

    componentDidMount() {
        axios
            .get(`${apiEndpoint}/api/inventorius`)
            .then((prod) => {
                this.setState({inventorius: prod});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const {data} = this.state.inventorius;
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
                        <InventoriusCardComponent key={id} id={id} {...otherProps} />
                    ))}
                </div>
            </div>
        );
    }
}
