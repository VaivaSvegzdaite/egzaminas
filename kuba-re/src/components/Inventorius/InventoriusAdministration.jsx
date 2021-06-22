import React, {Component} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import apiEndpoint from '../../configure';
import swal from "sweetalert";
import InventoriusFormComponent from "./InventoriusFormComponent";

class InventoriusAdministration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            pavadinimas: '',
            svoris: '',
            sektorius: '',
            regData: ''
        };
    }

    componentDidMount() {
        if (this.props.match.params.id > 0) {
            axios
                .get(`${apiEndpoint}/api/inventorius/${this.props.match.params.id}`)
                .then((response) => {
                    this.setState({
                        id: response.data.id || '',
                        pavadinimas: response.data.pavadinimas || '',
                        svoris: response.data.svoris || '',
                        sektorius: response.data.sektorius || '',
                        regData: response.data.regData || '',
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    };

    handleSubmit = (e) => {
        e.preventDefault(e);
        if (this.state.id > 0) {
            axios
                .put(`${apiEndpoint}/api/inventorius/${this.state.id}`, {
                    id: this.state.id,
                    pavadinimas: this.state.pavadinimas,
                    svoris: this.state.svoris,
                    sektorius: this.state.sektorius,
                    regData: this.state.regData,
                })
                .then(() => {
                        swal("Atlikta!", "Inventorius sėkmingai atnaujintas!", "success")
                        this.props.history.push('/inventorius')
                    }
                );
        } else {
            axios
                .post(`${apiEndpoint}/api/inventorius`, {
                    pavadinimas: this.state.pavadinimas,
                    svoris: this.state.svoris,
                    sektorius: this.state.sektorius,
                    regData: this.state.regData,
                })
                .then(() => {
                        swal("Atlikta!", "Inventorius sėkmingai sukurtas!", "success")
                        this.props.history.push('/inventorius')
                    }
                );

            this.setState({
                id: '',
                pavadinimas: '',
                svoris: '',
                sektorius: '',
                regData: '',
            })
        }
    }

    render() {
        return (
            <InventoriusFormComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                {...this.state}
            />
        );
    }
}

export default withRouter(InventoriusAdministration);
