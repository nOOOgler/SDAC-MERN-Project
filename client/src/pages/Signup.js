import React, { useState } from "react";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";
import "./Signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/users", {
        name,
        email,
        password,
      });
      navigate("/login");
    } catch (error) {
      console.error("There was an error creating the user!", error);
    }
  };

  const containerStyle = {
    width: "23rem",
  };

  const letterSpacingStyle = {
    letterSpacing: "1px",
  };

  const imgStyle = {
    objectFit: "cover",
    objectPosition: "left",
  };

  return (
    <div className="container my-3">
      <section className="vh-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 text-black">
              <div className="px-5 ms-xl-4">
                <i
                  className="fas fa-crow fa-2x me-3 pt-5 mt-xl-4"
                  style={{ color: "#709085" }}
                ></i>
                <span className="h1 fw-bold mb-0">BlogIt.</span>
              </div>

              <div className="d-flex align-items-center h-custom-2  ms-xl-3 mt-2  pt-xl-0 mt-xl-n5">
                <form style={containerStyle} onSubmit={handleSubmit}>
                  <h3
                    className="fw-normal mb-3 pb-3"
                    style={letterSpacingStyle}
                  >
                    Sign Up
                  </h3>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example18">
                      Email address
                    </label>
                    <input
                      type="email"
                      id="form2Example18"
                      className="form-control form-control-lg"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div data-mdb-input-init className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Example28">
                      Password
                    </label>
                    <input
                      type="password"
                      id="form2Example28"
                      className="form-control form-control-lg"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div class="pt-1 mb-4">
                    <button
                      data-mdb-button-init
                      data-mdb-ripple-init
                      class="btn btn-info btn-lg btn-block text-light"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>

                  <p>
                    Already have an account?{" "}
                    <NavLink to="/login" className="link-primary">
                      Sign In here
                    </NavLink>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-sm-6 px-0 d-none d-sm-block">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Login image"
                className="w-100 vh-100"
                style={imgStyle}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
