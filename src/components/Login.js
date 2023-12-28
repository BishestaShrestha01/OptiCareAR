import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (response.status === 200) {
        const data = await response.json();
        setMessage(null); // Clear previous login error message
        console.log("Token:", data.token);
        navigate("/dashboard");
      } else {
        const data = await response.json();
        setMessage(data.error || "Login failed.");
      }
    } catch (error) {
      setMessage("An error occurred during the login request.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center ">
        <div className="col-md-6">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
                {message && <p className="text-danger mt-2">{message}</p>}
              </form>
              <br></br>
              <p>
                Don't have an account?{" "}
                <Link to="/signup">
                  <button type="submit" className="btn btn-primary btn-block">
                    Signup{" "}
                  </button>
                </Link>
              </p>
              <p>
                <Link to="/">
                  <button type="submit" className="btn btn-primary btn-block">
                    Back to Home
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;