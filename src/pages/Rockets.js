import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectRockets,
  selectStatusRocket,
  reserve,
} from '../redux/rockets/rockets';

function Rockets() {
  const rockets = useSelector(selectRockets);
  const status = useSelector(selectStatusRocket);

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <div className="WrapperRockets">
      {rockets.map((rocket) => (
        <CardRocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          id={rocket.id}
          flickrImg={rocket.flickrImg[0]}
        />
      ))}
    </div>
  );
}

const CardRocket = (props) => {
  const {
    id, name, description, flickrImg,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="CardContainer">
      <div className="ImgContainer">
        <img
          src={flickrImg}
          alt="imagen"
          style={{
            objectFit: 'cover',
            minHeight: '300px',
            width: '100%',
          }}
        />
      </div>
      <div className="MainContainer">
        <h2>{name}</h2>
        <p>{description}</p>
        <button
          className="button"
          type="button"
          onClick={() => dispatch(reserve(id))}
        >
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

CardRocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImg: PropTypes.string.isRequired,
};

export default Rockets;
