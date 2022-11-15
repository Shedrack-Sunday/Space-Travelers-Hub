import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementRocket } from '../redux/rockets/rockets';

function Rockets = () => { 
  const dispatch = useDispatch();
  return (
  <section>
    Rockets
    <button type="button" onClick={() => dispatch(incrementRocket())}>

    </button>
  </section>
);

}
export default Rockets;
