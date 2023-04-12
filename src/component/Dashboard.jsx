import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Suggestions from "./Suggestion";
import Sidenav from "./Sidenav";
import Post from "./Post";

function Dashboard() {
  const navigate = useNavigate();
  const [storage, setStorage] = useState("");
  const getfunction = () => {
    setStorage(localStorage.getItem("User"));
  };
  console.log("Storage", storage);
  useEffect(() => {
    getfunction();
  }, []);

  return (
    <div>
      {storage == null ? (
        navigate("/login")
      ) : (
        <>
          <div className="row">
            <div className="col-4">
              <Sidenav />
            </div>
            <div className="col-4">
              <Post />
            </div>
            <div className="col-4">
              <Suggestions />
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;
