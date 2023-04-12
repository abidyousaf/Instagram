import React from 'react'
import { AiFillFacebook } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { useState, useContext } from "react";
import { ContextProvider } from "../App";
import { useForm } from "react-hook-form";

import './Login&signup.css'
function OSignup() {
  const { datasubmit, handlechange, handle } = useContext(ContextProvider);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div>
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
              height: "540px",
              width: "320px",
              marginRight: "120px",
              marginTop: "70px",
            }}
            id='login'
          >
            <center>
              {" "}
              <br />
              <img
                src="/insta.png"
                style={{ height: "100px", width: "180px" }}
              />
              <p>Sign up to see photos and videos from your friends.</p>
            </center>
            <center><button className='btn btn-primary rounded-3' role="button">  <center>
                {" "}
                <a
                  href="#"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <AiFillFacebook /> <span>Login with facebook</span>
                </a>
              </center></button>
              </center>
              <span id='or'> <center> OR </center></span>
            <form 
             onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Mobile Number or Email"
                aria-label="Email"
                name="email"
                required
                {...register("email", { required: true })}
                value={handle.email}
                onChange={handlechange}
              />
                 {errors.name && (
                            <div className="rerror">
                              Please Enter This Field
                            </div>
                          )}
              <input
                type="text"
                className="form-control mt-1"
                placeholder="Full name"
                aria-label="Full name"
                required
                name="name"
                {...register("name", { required: true })}
                onChange={handlechange}
                value={handle.name}
              />  {errors.name && (
                <div className="rerror">
                  Please Enter This Field
                </div>
              )}
               <input
                type="text"
                className="form-control mt-1"
                placeholder="User name"
                aria-label="User name"
              />
              <input
                type="password"
                className="form-control mt-1"
                placeholder="password"
                aria-label="Password"
                required
                {...register("password", {
                  required: true,
                  minLength: 7,
                })}
                onChange={handlechange}
                value={handle.password}
              />
               {errors.password &&
                            errors.password.type == "required" && (
                              <div className="rerror">
                                Please Enter This Field
                              </div>
                            )}
                          {errors.password &&
                            errors.password.type == "minLength" && (
                              <div className="rerror">
                                Please Enter atleast 7 Letters
                              </div>
                            )}
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary mt-3 rounded-pill"  type="button"  onClick={handleSubmit(datasubmit)}>
                  Signup
                </button>
              </div>
             
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
            id='login'
          >
            <center>
              <p className="mt-3">
              Have an account? <Link to="/login2"> Log in </Link>
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OSignup;