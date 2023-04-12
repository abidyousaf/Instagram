import React, { useContext } from "react";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Login&signup.css";
import { ContextProvider } from "../App";

function Login2() {
  const { datalogin, setPassword, setemail } = useContext(ContextProvider);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            src="/instagaram.png"
            style={{
              height: "500px",
              width: "300px",
              marginLeft: "170px",
              marginTop: "70px",
            
            }}
        
          />
        </div>
        <div
          className="col-6 border border-1"
          style={{
            height: "500px",
            width: "320px",
            marginRight: "120px",
            marginTop: "70px",
          }}
          id='login'
        >
          <center>
            {" "}
            <br />
            <br />
            <img src="/insta.png" style={{ height: "100px", width: "180px" }} />
          </center>
          <br />
          <br />
          <form>
            <input
              type="email"
              className="form-control ml-5"
              placeholder="email"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              aria-label="First name"
            />
            <br />
            <input
              type="password"
              className="form-control"
              placeholder="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Last name"
            />
            <br />
            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                className="btn btn-primary"
                type="button"
                onClick={datalogin}
              >
                Login
              </button>
            </div>

            <span id="or">
              {" "}
              <center> OR </center>
            </span>

            <center>
              {" "}
              <a href="#" style={{ color: "navyblue", textDecoration: "none" }}>
                <AiFillFacebook /> <span>Login with facebook</span>
              </a>
            </center>
            <br />
            <br />
            <center>
              {" "}
              <p>Forgot Password?</p>
            </center>
          </form>
        </div>
      </div>
      <br />
      <div className="row">
        <div className="col-6"></div>
        <div
          className="col-6 border border-1"
          style={{
            width: "300px",
            marginRight: "100px",
          }}
          id='dont'
        >
          <center>
            <p className="mt-3">
              Don't have an account?<Link to="/osignup">Sign up</Link>
            </p>
          </center>
        </div>
      </div>
    </div>
  );
}

export default Login2;
