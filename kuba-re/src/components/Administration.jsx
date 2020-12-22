import React, { Component } from 'react';
import axios from 'axios';
import apiEndpoint from '../configure';
import FormComponent from './FormComponent';

class ProductAdministrationComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      name: '',
      logo: '',
      category: '',
      size: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  updateProduct = (e) => {
    e.preventDefault();
    axios
      .put(`${apiEndpoint}/api/studios/${this.state.id}`, {
        id: this.state.id,
        name: this.state.name,
        logo: this.state.logo,
        category: this.state.category,
        size: this.state.size,
      })
      .then(() => this.props.history.push('/admin/studios'));
  };

  createProduct = (e) => {
    axios
      .post(`${apiEndpoint}/api/studios`, {
        id: this.state.id,
        name: e.target.name.value,
        logo: e.target.logo.value,
        category: e.target.category.value,
        size: e.target.size.value,
      })
      .then(() => this.props.history.push('/admin/studios'));
  };

  componentDidMount() {
    axios
      .get(`${apiEndpoint}/api/studios/${this.props.match.params.id}`)
      .then((response) => {
        this.setState({
          id: response.data.id,
          name: response.data.name,
          logo: response.data.logo,
          category: response.data.category,
          size: response.data.size,
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
      name: '',
      logo: '',
      category: '',
      size: '',
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
