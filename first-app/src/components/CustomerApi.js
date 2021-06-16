import React, { useState, useEffect } from "react";
import axios from "axios";

function CustomerApi() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const Customers = async () => {
      //api
      const result = await axios.get("https://localhost:44371/api/Customer");
      setData(result.data);
    };
    Customers();
  }, []);

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>salesRepEmpNum</th>
            <th>Name</th>
            <th>LastName</th>
            <th>FirstName</th>
            <th>Phone</th>
            <th>Address1</th>
            <th>Address2</th>
            <th>City</th>
            <th>State</th>
            <th>PostalCode</th>
            <th>Country</th>
            <th>CreditLimit</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ProductlineId}>
              <td>{item.salesRepEmpNum}</td>
              <td>{item.Name}</td>
              <td>{item.LastName}</td>
              <td>{item.FirstName}</td>
              <td>{item.Phone}</td>
              <td>{item.Address1}</td>
              <td>{item.Address2}</td>
              <td>{item.City}</td>
              <td>{item.State}</td>
              <td>{item.Postalcode}</td>
              <td>{item.Country}</td>
              <td>{item.CreditLimit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default CustomerApi;