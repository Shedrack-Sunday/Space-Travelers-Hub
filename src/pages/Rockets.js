import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { selectRockets, selectStatusRocket } from '../redux/rockets/rockets';

function Rockets() {
  const rockets = useSelector(selectRockets);
  const status = useSelector(selectStatusRocket);
  console.log(rockets);

  if (status === 'loading') return <h1>Loading...</h1>;
  return (
    <div className="WrapperRockets">
      {rockets.map((rocket) => (
        <CardRocket
          key={rocket.id}
          name={rocket.name}
          description={rocket.description}
          flickrImg={rocket.flickrImg}
        />
      ))}
    </div>
  );
}

const CardRocket = (props) => {
  const { name, description, flickrImg } = props;
  return (
    <div className="CardContainer">
      <div className="ImgContainer">
        <img
          src={flickrImg[0]}
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
        <button className="button" type="button">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
};

CardRocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  flickrImg: PropTypes.arrayOf.isRequired,
};

export default Rockets;
