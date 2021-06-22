import React from 'react';
import {Link} from 'react-router-dom';

const FormComponent = ({handleChange, handleSubmit, ...otherProps}) => {
    const {vardas, pavarde, dob, tel, tipas} = otherProps;

    return (
        <div>
            <form className="container my-5" onSubmit={handleSubmit}>
                <div className="form-group col-6">
                    <label htmlFor="vardas">Vardas</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        required="required"
                        id="vardas"
                        name="vardas"
                        value={vardas}
                    />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="pavarde">Pavarde</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        required="required"
                        id="pavarde"
                        name="pavarde"
                        value={pavarde}
                    />
                </div>
                <div className="form-group col-4">
                    <label htmlFor="date">Gimimo data</label>
                    <input
                        onChange={handleChange}
                        type="date"
                        className="form-control"
                        id="dob"
                        name="dob"
                        value={dob}
                    />
                </div>
                <div className="form-group col-3">
                    <label htmlFor="tel">Telefonas</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        required="required"
                        className="form-control"
                        id="tel"
                        name="tel"
                        value={tel}
                    />
                </div>
                <div className="form-group col-4">
                    <p>Kliento tipas</p>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={handleChange}
                            className="form-check-input"
                            type="radio"
                            name="tipas"
                            id="REG"
                            value="REG"
                        />
                        <label className="form-check-label" htmlFor="REG" name="REG">
                            REG
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            onChange={handleChange}
                            className
                                ="form-check-input"
                            type="radio"
                            name="tipas"
                            id="VIP"
                            value="VIP"
                        />
                        <label className="form-check-label" htmlFor="VIP" name="VIP">
                            VIP
                        </label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary">
                    Išsaugoti
                </button>
                <Link to={`/klientai/admin`} className="btn btn-primary ml-4">
                    Back
                </Link>
            </form>
        </div>
    );
};

export default FormComponent;
