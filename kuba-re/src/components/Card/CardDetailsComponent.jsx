import {Link} from 'react-router-dom';
import img from '../../img/greeting.jpg';

const CardDetailsComponent = ({
                                  id,
                                  text,
                                  imageUrl,
                                  mp3File,
                                  nameg,
                                  date,
                                  greetingType,
                                  places
                              }) => {
    return (
        <div className="card bg-light mb-3" style={{width: '35rem'}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <img src={img} className="card-img-top" alt={"l"}/>
                    </div>
                    <div className="col-sm-6">
                        <div className="card-body-right">
                            <h5 className="card-title">{text} </h5>
                            <p>Name: {nameg}</p>
                            <p>Mp3File: n/a</p>
                            <p className="card-text">Date and
                                time: {date.toLocaleString().slice(0, 16).replace('T', ' ')}</p>
                            <p>Greeting type: {greetingType}</p>
                            <div>Greeting places: {(
                                places.map(place => {
                                    return <p key={place.id}>{place.title}</p>
                                })
                            )}</div>
                            <p>
                                <Link
                                    className="btn btn-secondary mr-2"
                                    to={`/admin/greetings/${id}`}
                                >
                                    {' '}
                                    Edit{' '}
                                </Link>
                                <Link to={`/greetings`} className="btn btn-primary mx-4">
                                    Back
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default CardDetailsComponent;
