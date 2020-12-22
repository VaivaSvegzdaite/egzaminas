import React from 'react';
import { Link } from 'react-router-dom';

const FormComponent = ({ handleChange, handleSubmit, ...otherProps }) => {
  const { text, imageUrl, mp3File, nameg, date, greetingType } = otherProps;
  return (
    <div>
      <form className="container my-5" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="text">Name</label>
          <input
            onChange={handleChange}
            type="text"
            required="required"
            className="form-control"
            id="text"
            name="text"
            value={text}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imageUrl">Image url</label>
          <input
            onChange={handleChange}
            type="url"
            required="required"
            className="form-control"
            id="imageUrl"
            name="imageUrl"
            value={imageUrl}
          />
        </div>
        <div className="form-group">
          <label for="mp3File" class="form-label">
            Mp3 file
          </label>
          <input
            class="form-control form-control-sm"
            id="mp3File"
            name="mp3File"
            type="file"
            onChange={handleChange}
            value={mp3File}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nameg">Greeter's name</label>
          <input
            onChange={handleChange}
            type="text"
            required="required"
            className="form-control"
            id="nameg"
            name="nameg"
            value={nameg}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            onChange={handleChange}
            type="datetime-local"
            required="required"
            className="form-control"
            id="date"
            name="date"
            value={date}
          />
        </div>
        <div className="form-group">
          <p>Greeting Type</p>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="public"
              value={greetingType}
            />
            <label class="form-check-label" for="public">
              LIVE
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="private"
              value={greetingType}
            />
            <label class="form-check-label" for="private">
              TV
            </label>
          </div>
          <div class="form-check form-check-inline">
            <input
              onChange={handleChange}
              class="form-check-input"
              type="radio"
              name="inlineRadioOptions"
              id="live"
              value={greetingType}
            />
            <label class="form-check-label" for="live">
              WEB
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
