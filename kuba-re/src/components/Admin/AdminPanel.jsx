import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import apiEndpoint from '../../configure';
import AdministrationListComponent from './AdminListComponent';
import DeleteModal from '../Utils/DeleteModal';
import swal from 'sweetalert'
import Spinner from "../Utils/Spinner";

export default class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greetings: [],
            modalVisibility: false,
        };
    }

    handleModalVisibility = () => this.setState({modalVisibility: true});

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

    deleteGreeting = (e) => {
        swal({
            text: "Ar tikrai norite ištrinti sveikinimą?",
            buttons: ["Ne", "Taip"],
            dangerMode: true,
        }).then((actionConfirmed) => {
            swal("Atlikta!", "Sveikinimas sėkmingai ištrintas!", "success");
            if (actionConfirmed) {
                axios
                    .delete(`${apiEndpoint}/api/greetings/${e.target.id}`)
                    .then((response) => {

                        axios.get(`${apiEndpoint}/api/greetings`).then((prod) => {
                            this.setState({greetings: prod});
                        });
                    }).catch(() => {
                });
            }
        });
    }

    render() {
        const {data} = this.state.greetings;
        if (data) {
            return (
                <div className="container mt-5">
                    <Link to={`/admin/greetings/new`} className="btn btn-primary mb-5">
                        Add new
                    </Link>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Image</th>
                            <th scope="col">Text</th>
                            <th scope="col">Name</th>
                            <th scope="col">Date</th>
                            <th scope="col">GreetingType</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        {data.map(({id, ...otherProps}) => (
                            <AdministrationListComponent
                                key={id}
                                id={id}
                                {...otherProps}
                                deleteGreeting={this.deleteGreeting}
                            />
                        ))}
                    </table>
                    <DeleteModal
                        visibility={this.state.modalVisibility}
                        handleModal={this.handleModalVisibility}
                    />
                </div>
            );
        } else {
            return <Spinner/>;
        }
    }
}
