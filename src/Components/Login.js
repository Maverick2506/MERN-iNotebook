import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API CALL
      const response = await fetch(`http://localhost:8000/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: credentials.email,
          password: credentials.password,
        }),
      });
      const json = await response.json();
      console.log(json);

      if (json.success) {
        // Save auth-token and redirect
        localStorage.setItem("token", json.auth);
        navigate("/");
        props.showAlert("Login Success", "success");
      } else {
        props.showAlert("Invalid Credentials", "danger");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-4">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-floating mb-3 my-4">
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={onChange}
            placeholder="email@email.com"
            aria-describedby="emailHelp"
            required
          />
          <label htmlFor="email" className="form-label">
            Email address
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder="password"
            value={credentials.password}
            onChange={onChange}
            required
          />
          <label htmlFor="password" className="form-label">
            Password
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
