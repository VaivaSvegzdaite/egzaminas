import React, {Component} from 'react';
import axios from 'axios';
import apiEndpoint from '../../configure';
import CardComponent from './CardComponent';
import Spinner from "../Utils/Spinner";


export default class ListComponent extends Component {
    constructor() {
        super();
        this.state = {
            greetings: [],
        };
    }

    componentDidMount() {
        axios
            .get(`${apiEndpoint}/api/greetings`)
            .then((prod) => {
                this.setState({greetings: prod});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    render() {
        const {data} = this.state.greetings;
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
                        <CardComponent key={id} id={id} {...otherProps} />
                    ))}
                </div>
            </div>
        );
    }
}
