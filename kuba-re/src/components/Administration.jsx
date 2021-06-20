import React, {Component} from 'react';
import {withRouter} from 'react-router';
import axios from 'axios';
import apiEndpoint from '../configure';
import FormComponent from './FormComponent';

class Administration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            text: '',
            imageUrl: '',
            mp3File: '',
            nameg: '',
            date: '',
            greetingType: '',
            places: ''
        };
    }

    componentDidMount() {
        if (this.props.match.params.id > 0) {
            axios
                .get(`${apiEndpoint}/api/greetings/${this.props.match.params.id}`)
                .then((response) => {
                    this.setState({
                        id: response.data.id || '',
                        text: response.data.text || '',
                        imageUrl: response.data.imageUrl || '',
                        mp3File: response.data.mp3File || '',
                        nameg: response.data.nameg || '',
                        date: response.data.date || '',
                        greetingType: response.data.greetingType || '',
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
        console.log(value);
    };

    handleSubmit = (e) => {
        e.preventDefault(e);
        if (this.state.id > 0) {
            axios
                .put(`${apiEndpoint}/api/greetings/${this.state.id}`, {
                    id: this.state.id,
                    text: this.state.text,
                    imageUrl: this.state.imageUrl,
                    mp3File: this.state.mp3File,
                    nameg: this.state.nameg,
                    date: this.state.date,
                    greetingType: this.state.greetingType,
                })
                .then(() => this.props.history.push('/admin/greetings'));
        } else {

            axios
                .post(`${apiEndpoint}/api/greetings`, {
                    text: this.state.text,
                    imageUrl: this.state.imageUrl,
                    mp3File: this.state.mp3File,
                    nameg: this.state.nameg,
                    date: this.state.date,
                    greetingType: this.state.greetingType,
                })
                .then(() => this.props.history.push('/admin/greetings'));

            this.setState({
                id: '',
                text: '',
                imageUrl: '',
                mp3File: '',
                nameg: '',
                date: '',
                greetingType: '',
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
