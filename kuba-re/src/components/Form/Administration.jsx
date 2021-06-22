import React, {Component} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import apiEndpoint from '../../configure';
import FormComponent from './FormComponent';
import swal from "sweetalert";

class Administration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            vardas: '',
            pavarde: '',
            dob: '',
            tel: '',
            tipas: '',
            inventorius: ''
        };
    }

    componentDidMount() {
        if (this.props.match.params.id > 0) {
            axios
                .get(`${apiEndpoint}/api/klientai/${this.props.match.params.id}`)
                .then((response) => {
                    this.setState({
                        id: response.data.id || '',
                        vardas: response.data.vardas || '',
                        pavarde: response.data.pavarde || '',
                        dob: response.data.dob || '',
                        tel: response.data.tel || '',
                        tipas: response.data.tipas || '',
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
                .put(`${apiEndpoint}/api/klientai/${this.state.id}`, {
                    id: this.state.id,
                    vardas: this.state.vardas,
                    pavarde: this.state.pavarde,
                    dob: this.state.dob,
                    tel: this.state.tel,
                    tipas: this.state.tipas,
                })
                .then(() => {
                        swal("Atlikta!", "Klientas sėkmingai atnaujintas!", "success")
                        this.props.history.push('/klientai/admin')
                    }
                );
        } else {
            axios
                .post(`${apiEndpoint}/api/klientai`, {
                    vardas: this.state.vardas,
                    pavarde: this.state.pavarde,
                    dob: this.state.dob,
                    tel: this.state.tel,
                    tipas: this.state.tipas,
                })
                .then(() => {
                        swal("Atlikta!", "Klientas sėkmingai sukurtas!", "success")
                        this.props.history.push('/klientai/admin')
                    }
                );

            this.setState({
                id: '',
                vardas: '',
                pavarde: '',
                dob: '',
                tel: '',
                tipas: '',
            })
        }
    }

    render() {
        return (
            <FormComponent
                handleSubmit={this.handleSubmit}
                handleChange={this.handleChange}
                {...this.state}
            />
        );
    }
}

export default withRouter(Administration);
