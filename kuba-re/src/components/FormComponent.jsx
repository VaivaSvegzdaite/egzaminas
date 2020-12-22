import React from 'react';
import { Link } from 'react-router-dom';

const FormComponent = ({ handleChange, handleSubmit, ...otherProps }) => {
  const { name, logo, category, size } = otherProps;
  return (
    <div>
      <form className="container my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="productTitle">Name</label>
          <input
            onChange={handleChange}
            type="text"
            required="required"
            className="form-control"
            id="productTitle"
            name="title"
            value={name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="productImage">Logo url</label>
          <input
            onChange={handleChange}
            type="url"
            required="required"
            className="form-control"
            id="productImage"
            name="image"
            value={logo}
          />
        </div>
        <div className="form-group">
          <p>Category</p>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="public"
              value={category}
            />
            <label class="form-check-label" for="public">
              public
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="private"
              value={category}
            />
            <label class="form-check-label" for="private">
              private
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="live"
              value={category}
            />
            <label class="form-check-label" for="live">
              live
            </label>
          </div>
        </div>
        <div className="form-group">
          <p>Size</p>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions1"
              id="small"
              value={size}
            />
            <label class="form-check-label" for="small">
              small
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions1"
              id="medium"
              value={size}
            />
            <label class="form-check-label" for="medium">
              medium
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions1"
              id="large"
              value={size}
            />
            <label class="form-check-label" for="large">
              large
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
        <Link to={`/admin`} className="btn btn-primary mx-4">
          Back
        </Link>
      </form>
    </div>
  );
};

export default FormComponent;
