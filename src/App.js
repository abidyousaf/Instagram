import "./App.css";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, createContext } from "react";
import Dashboard from "./component/Dashboard";
import NotFound from "./component/NotFound";
import OSignup from "./component/Signup";
import Login2 from "./component/Login";
const ContextProvider = createContext();
function App() {
  const navigate = useNavigate();
  const emptyfield = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  };
  const [handle, setHandle] = useState(emptyfield);
  const handlechange = (e) => {
    const { name, value } = e.target;
    setHandle({ ...handle, [name]: value });
    console.log("data", handle);
  };
  let [email, setemail] = useState("");
  let [password, setPassword] = useState("");
  // let [data,setData] = useState([])
  const datasubmit = async () => {
    // setData([...data,handle])
    // console.log("mydata",data);
    // console.log("handle",handle);
    localStorage.setItem("User", JSON.stringify(handle));
    NotificationManager.success("Register Successfully");
    setHandle(emptyfield);
    navigate("/login2");
  };

  const datalogin = (e) => {
    e.preventDefault();

    const loginuser = JSON.parse(localStorage.getItem("User"));
    if (email == "" || password == "") {
      NotificationManager.error("!login Failed");
    } else if (email === loginuser.email && password === loginuser.password) {
      NotificationManager.success("Register Successfully");
      navigate("/Dashboard");
    } else {
      toast.error("!Wrong password and email", {
        position: "top-center",
      });
      // NotificationManager.error("!Wrong password and email");
    }
  };
  const handlelogout = () => {
    // localStorage.removeItem("User");
    setemail("");
    setPassword("");
    navigate("/osignup");
  };
  return (
    <div>
      
      <ContextProvider.Provider
        value={{
          handlechange,
          datalogin,
          datasubmit,
          handle,
          setemail,
          setPassword,
          handlelogout,
        }}
      >
        <Routes>
          <Route path="/" element={<OSignup/>} />
          <Route path="/osignup" element={<OSignup/>}/>
          <Route path="/login2" element={<Login2/>}/>
          <Route path="/Dashboard/*" element={<Dashboard />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </ContextProvider.Provider>
      <NotificationContainer/>
      <ToastContainer />
    </div>
  );
}

export default App;
export { ContextProvider };
