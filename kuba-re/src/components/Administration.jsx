import React, { Component } from 'react';
import axios from 'axios';
import apiEndpoint from '../configure';
import FormComponent from './FormComponent';

class ProductAdministrationComponent extends Component {
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
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateProduct = (e) => {
    e.preventDefault();
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
  };

  createProduct = (e) => {
    axios
      .post(`${apiEndpoint}/api/greetings`, {
        id: this.state.id,
        text: e.target.text,
        imageUrl: e.target.imageUrl,
        mp3File: e.target.mp3File,
        nameg: e.target.nameg,
        date: e.target.date,
        greetingType: e.targer.greetingType,
      })
      .then(() => this.props.history.push('/admin/greetings'));
  };

  componentDidMount() {
    axios
      .get(`${apiEndpoint}/api/greetings/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          text: response.data.text,
          imageUrl: response.data.imageUrl,
          mp3File: response.data.mp3File,
          nameg: response.data.nameg,
          date: response.data.date,
          greetingType: response.data.greetingType,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id > 0) {
      this.updateProduct();
    } else {
      this.createProduct();
    }
    this.setState({
      text: '',
      imageUrl: '',
      mp3File: '',
      nameg: '',
      date: '',
      greetingType: '',
    });
  };

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

export default ProductAdministrationComponent;
