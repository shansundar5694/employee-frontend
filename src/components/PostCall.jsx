import axios from "axios";
import React, { useState } from "react";

const PostCall = () => {
  const [apiData, setApiData] = useState({});
  const [message, setMessage] = useState();

  const handleClick = () => {
    const payload = {
      firstName: "vel",
      lastName: "samy",
      email: "vel@gmail.com",
      designation: "dev",
    };
    axios
      //   .post("http://localhost:4000/api/create-employee", payload)
      .post(
        "https://employee-second-crud.onrender.com/api/create-employee",
        payload
      )
      .then((res) => {
        setApiData(res.data.data), setMessage(res.data.message);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>post call data</div>
      <button onClick={handleClick}>Create Employee</button>
      <div>{message}</div>
      {/* {apiData.map((item, ind) => {
        return ( */}
      <div key={ind}>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{item.email}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.firstName}
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {item.lastName}
            </h6>
            <p className="card-text">{item.designation}</p>
          </div>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default PostCall;
