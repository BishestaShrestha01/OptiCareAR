// client/src/components/Home.js
import React from "react";
import { Link } from "react-router-dom";

const Home = ({ darkMode, toggleDarkMode }) => {
  return (
    <div className="row mt-5 justify-content-center">
      <div className="col-md-6">
        <div className="card text-center bg-dark text-light">
          <div className="card-body">
            <h5 className="card-title">Welcome!</h5>
            <p className="card-text">Choose an option below:</p>
            <Link to="/signup" className="btn btn-primary btn-lg m-2">
              Signup
            </Link>
            <Link to="/login" className="btn btn-success btn-lg m-2">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
