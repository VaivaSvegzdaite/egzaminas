import {Link} from 'react-router-dom';
import img from '../../img/no-img.png';

const CardDetailsComponent = ({
                                  id, vardas, pavarde, dob, tel, tipas, inventorius
                              }) => {
    return (
        <div className="card bg-light mb-3 border-0" style={{width: '35rem'}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img src={img} className="card-img-top" alt={"l"}/>
                    </div>
                    <div className="col-sm-6">
                        <div className="card-body-right">
                            <h5 className="card-title">Kliento informacija:</h5>
                            <p>Vardas: {vardas}</p>
                            <p>Pavarde: {pavarde}</p>
                            <p>Gimimo data: {dob}</p>
                            <p className="card-text">Tel.: {tel}</p>
                            <p>Kliento tipas: {tipas}</p>
                            <div><span className="h5">Inventoriaus sąrašas:</span> {(
                                inventorius.map(i => {
                                    return <p key={i.id}>{i.pavadinimas}{' '}</p>
                                })
                            )}</div>
                            <p>
                                <Link
                                    className="btn btn-secondary mr-2"
                                    to={`/klientai/admin/${id}`}
                                >
                                    {' '}
                                    Edit{' '}
                                </Link>
                                <Link to={`/klientai/admin`} className="btn btn-primary mx-4">
                                    Back
                                </Link>
                            </p>
                            <Link to={`/inventorius/admin`} className="btn btn-success">
                                Pridėti inventorių
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardDetailsComponent;
