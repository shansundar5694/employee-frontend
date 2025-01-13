import axios from "axios";
import React, { useEffect, useState } from "react";

const GetCall = () => {
  const [apiData, setApiData] = useState([]);
  const [message, setMessage] = useState();
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = () => {
    axios
      .get("http://localhost:4000/api/empget")
      .then((res) => {
        setApiData(res.data.data), setMessage(res.data.message);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div>{message}</div>
      {apiData.map((item, ind) => {
        return (
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
        );
      })}
    </div>
  );
};

export default GetCall;
