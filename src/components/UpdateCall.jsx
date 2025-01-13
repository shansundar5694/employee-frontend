import axios from "axios";
import React, { useState } from "react";

const Update = () => {
  const [apiData, setApiData] = useState({});
  const [message, setMessage] = useState();

  const handleClick = () => {
    const payload = {
      firstName: "vel",
      lastName: "sundat",
      designation: "dev",
    };
    const email = "shans@gmail.com";
    axios
      .put(`http://localhost:4000/api/editemp/${email}`, payload)
      .put(
        `https://employee-second-crud.onrender.com/api/editemp/${email}`,
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
      <button onClick={handleClick}>update Employee</button>
      <div>{message}</div>
      {/* {apiData.map((item, ind) => {
        return ( */}
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">{apiData.email}</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {apiData.firstName}
            </h6>
            <h6 className="card-subtitle mb-2 text-body-secondary">
              {apiData.lastName}
            </h6>
            <p className="card-text">{apiData.designation}</p>
          </div>
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
};

export default Update;
