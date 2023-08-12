import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API CALL
      const response = await fetch(
        `http://localhost:8000/api/auth/createuser`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: credentials.name,
            email: credentials.email,
            password: credentials.password,
          }),
        }
      );
      const json = await response.json();
      console.log(json);

      if (json.success) {
        // Save auth-token and redirect
        localStorage.setItem("token", json.auth);
        navigate("/");
      } else {
        // <AlertMsg message="Invalid Credentials" />;
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container my-4">
      <h1>Sign Up</h1>
      <form className="my-4" onSubmit={handleSubmit}>
        <div className="form-floating mb-3 my-4">
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            placeholder=""
            onChange={onChange}
          />
          <label htmlFor="name" className="form-label">
            Enter Your Name
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={onChange}
            placeholder=""
          />
          <label htmlFor="email" className="form-label">
            Enter Your Email address
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={onChange}
            placeholder=""
            minLength={8}
            required
          />
          <label htmlFor="password" className="form-label">
            Create A Password
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="cpassword"
            name="cpassword"
            onChange={onChange}
            placeholder=""
            minLength={8}
            required
          />
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
