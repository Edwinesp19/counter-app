// import { Fragment } from "react"

// const  profile = {
//   name: "Edwin",
//   title: "Junior FrontEnd, BackEnd & UI/UX Designer"
// };

import PropTypes from 'prop-types';
import{CounterApp} from "./CounterApp";

export const FirstApp = ({title,name}) => {
  return (
    <>
      <h2 style={{ fontSize: "50px", marginBottom: "0px" }}>
        Hola, soy <span>{name}</span>
      </h2>
      <p>{title}</p>

      <CounterApp />
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
FirstApp.defaultProps = {
  title: 'No hay titulo',
  name: 'una Persona',
};









