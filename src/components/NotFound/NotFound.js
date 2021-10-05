import React from "react";
import "./NotFound.css"; //import css style
import image from "../../images/page-404-image.png";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const gotToHome = () => {
    history.push("/home");
  };
  const goBack = () => {
    history.goBack();
  };
  return (
    <div className="error-page">
      <img className="mb-3" src={image} alt="" />
      <h1>Oops! That page can't be found.</h1>
      <p>
        It looks like nothing was found at this location. Maybe try one of the
        links below.
      </p>
      <div className="btn-box">
        <button onClick={gotToHome} className="btn btn-success me-3">
          Go to home
        </button>
        <button onClick={goBack} className="btn btn-dark">
          Go back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
