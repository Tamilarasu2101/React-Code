import React, { useState, useEffect } from "react";
import axios from "axios";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Orders = async () => {
      //api
      const result = await axios.get("https://localhost:44371/api/Order");
      setData(result.data);
    };
    Orders();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Order Date</th>
            <th>Required Date</th>
            <th>Shipped Date</th>
            <th>Status</th>
            <th>Comments</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.Id}>
              <td>{item.CustomerId}</td>
              <td>{item.OrderDate}</td>
              <td>{item.RequiredDate}</td>
              <td>{item.ShippedDate}</td>
              <td>{item.Status}</td>
              <td>{item.Comments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Api;
