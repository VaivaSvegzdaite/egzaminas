import React from 'react';
import {Link} from 'react-router-dom';

const InventoriusFormComponent = ({handleChange, handleSubmit, ...otherProps}) => {
    const {pavadinimas, svoris, sektorius, regData} = otherProps;

    return (
        <div>
            <form className="container my-5" onSubmit={handleSubmit}>
                <div className="form-group col-6">
                    <label htmlFor="pavadinimas">Pavadinimas</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="pavadinimas"
                        name="pavadinimas"
                        value={pavadinimas}
                    />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="svoris">Svoris</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        required="required"
                        id="svoris"
                        name="svoris"
                        value={svoris}
                    />
                </div>
                <div className="form-group col-6">
                    <label htmlFor="sektorius">Sektorius</label>
                    <input
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="sktorius"
                        name="sektorius"
                        value={sektorius}
                    />
                </div>
                <div className="form-group col-4">
                    <label htmlFor="regData">Registravimo data</label>
                    <input
                        onChange={handleChange}
                        type="date"
                        className="form-control"
                        id="regData"
                        name="regData"
                        value={regData}
                    />
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

export default InventoriusFormComponent;
