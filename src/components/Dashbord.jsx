import React,{Fragment,useEffect} from 'react'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Dashbord() {

    let navigate = useNavigate();
  let name = sessionStorage.getItem("firstName");
  useEffect(() => {
    checkAuth();
  });
  let Logout = () => {
    sessionStorage.clear();
    navigate("/login");
  };
  let checkAuth = async () => {
    let token = sessionStorage.getItem("token");
    if (token) {
      let config = {
        headers: {
          token: token,
        },
      };
      
      let baseUrl="http://localhost:4000/users"
      let res = await axios.post(
        `${baseUrl}/auth`,
        {
          purpose: "Validate to Access",
          //config,
        },
        config
      );
      if (res.data.statusCode !== 200) {
        sessionStorage.clear();
        navigate("/login");
      }

      //console.log(res);
    } else {
      navigate("/login");
    }
  };
    return (
        <Fragment>
          <div style={{ textAlign: "center" }}>
            <h1>{name} Welcome to Your Profile</h1>
          </div>
          <Link to="/profile" >
          <button
            style={{ color: "white", background: "blue",width:"100px",height:"50px",borderRadius:"5px",marginLeft:"550px",marginTop:"50px" }}
            onClick={() => checkAuth()}
          >
            profile
          </button>
          </Link>
          <button
            style={{ color: "white", background: "blue" ,width:"100px",height:"50px",borderRadius:"5px" ,marginLeft:'20px'}}
            onClick={() => Logout()}
          >
            Logout
          </button>
        </Fragment>
      );
}

export default Dashbord