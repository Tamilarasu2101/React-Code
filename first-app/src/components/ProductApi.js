import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductApi() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const Products = async () => {
      //api
      const result = await axios.get("https://localhost:44371/api/Product");
      setProduct(result.data);
    };
    Products();
  }, []);

  return (
    <>
    <div className="row">
      <div className="col-md-6 offset-md-3">
      <table className="table">
        <thead>
          <tr>
            <th>Code</th>
            <th>ProductlineId</th>
            <th>Name</th>
            <th>Scale</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item) => (
            <tr key={item.Code}>
              <td>{item.Code}</td>
              <td>{item.ProductlineId}</td>
              <td>{item.Name}</td>
              <td>{item.Scale}</td>
              <td>
                <Link to={"/ProductDetails/" +item.Code} class="btn btn-primary">
                  More
                </Link>
              </td>
              <td>
                <Link to={"/editProduct/"+item.Code} class="btn btn-warning">
                  Edit
                </Link>
              </td>
              <td>
                <Link to={"/DelProduct/"+item.Code} class="btn btn-danger">
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
    </>
  );
}

export default ProductApi;
