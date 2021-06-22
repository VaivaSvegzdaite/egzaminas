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
            klientai: [],
            modalVisibility: false,
        };
    }

    handleModalVisibility = () => this.setState({modalVisibility: true});

    componentDidMount() {
        axios
            .get(`${apiEndpoint}/api/klientai`)
            .then((prod) => {
                this.setState({klientai: prod});
            })
            .catch((err) => {
                console.log(err);
            });
    }

    deleteKlientas = (e) => {
        swal({
            text: "Ar tikrai norite ištrinti klientą?",
            buttons: ["Ne", "Taip"],
            dangerMode: true,
        }).then((actionConfirmed) => {
            swal("Atlikta!", "Klientas sėkmingai ištrintas!", "success");
            if (actionConfirmed) {
                axios
                    .delete(`${apiEndpoint}/api/klientai/${e.target.id}`)
                    .then((response) => {

                        axios.get(`${apiEndpoint}/api/klientai`).then((prod) => {
                            this.setState({klientai: prod});
                        });
                    }).catch(() => {
                });
            }
        });
    }

    render() {
        const {data} = this.state.klientai;
        if (data) {
            return (
                <div className="container mt-5">
                    <Link to={`/klientai/admin/new`} className="btn btn-primary mb-5">
                        Pridėti klienta
                    </Link>
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col"></th>
                            <th scope="col">Vardas</th>
                            <th scope="col">Pavarde</th>
                            <th scope="col">Telefonas</th>
                            <th scope="col">Tipas</th>
                            <th scope="col">Inventoriaus vnt.</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                        </thead>
                        {data.map(({id, ...otherProps}) => (
                            <AdministrationListComponent
                                key={id}
                                id={id}
                                {...otherProps}
                                deleteKlientas={this.deleteKlientas}
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
