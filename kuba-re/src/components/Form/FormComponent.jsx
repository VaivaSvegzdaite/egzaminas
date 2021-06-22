import React from 'react';
import {Link} from 'react-router-dom';

const FormComponent = ({handleChange, handleSubmit, ...otherProps}) => {
    const {text, imageUrl, nameg, date} = otherProps;

    return (
        <div>
            <form className="container my-5" onSubmit={handleSubmit}>
                <div className="form-group col-6">
                    <label htmlFor="text">Text</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="text"
                        name="text"
                        value={text}
                    />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="imageUrl">Image url</label>
                    <input
                        onChange={handleChange}
                        type="url"
                        className="form-control"
                        id="imageUrl"
                        name="imageUrl"
                        value={imageUrl}
                    />
                </div>
                {/*<div className="form-group col-6">*/}
                {/*  <label for="mp3File" class="form-label">*/}
                {/*    Mp3 file*/}
                {/*  </label>*/}
                {/*  <input*/}
                {/*    class="form-control form-control-sm"*/}
                {/*    id="mp3File"*/}
                {/*    name="mp3File"*/}
                {/*    type="file"*/}
                {/*    onChange={handleChange}*/}
                {/*    value={[]}*/}
                {/*  />*/}
                {/*</div>*/}
                <div className="form-group col-3">
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
                <div className="form-group col-4">
                    <label htmlFor="date">Date</label>
                    <input
                        onChange={handleChange}
                        type="date"
                        required="required"
                        className="form-control"
                        id="date"
                        name="date"
                        value={date}
                    />
                </div>
                <div className="form-group col-4">
                    <p>Greeting Type</p>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={handleChange}
                            className="form-check-input"
                            type="radio"
                            name="greetingType"
                            id="public"
                            value="LIVE"
                        />
                        <label className="form-check-label" htmlFor="public" name="LIVE">
                            LIVE
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={handleChange}
                            className
                                ="form-check-input"
                            type="radio"
                            name="greetingType"
                            id="private"
                            value="TV"
                        />
                        <label className="form-check-label" htmlFor="private" name="TV">
                            TV
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={handleChange}
                            className="form-check-input"
                            type="radio"
                            name="greetingType"
                            id="live"
                            value="WEB"
                        />
                        <label className="form-check-label" htmlFor="live" name="WEB">
                            WEB
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Save
                </button>
                <Link to={`/admin/greetings`} className="btn btn-primary ml-4">
                    Back
                </Link>
            </form>
        </div>
    );
};

export default FormComponent;
