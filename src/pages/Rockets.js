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
          reserved={rocket.reserved}
        />
      ))}
    </div>
  );
}

const CardRocket = (props) => {
  const {
    id, name, description, flickrImg, reserved,
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
        <div>
          {reserved ? (
            <div>
              <p>
                <span>Reserved</span>
                {description}
              </p>
            </div>
          ) : (
            description
          )}
        </div>
        <button
          className="button"
          type="button"
          onClick={() => dispatch(reserve(id))}
        >
          {reserved ? <div className="white">Cancel Reservation</div> : 'Reserve Rocket'}
        </button>
      </div>
    </div>
  );
};

CardRocket.defaultProps = {
  reserved: false,
};

CardRocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImg: PropTypes.string.isRequired,
  reserved: PropTypes.bool,
};

export default Rockets;
