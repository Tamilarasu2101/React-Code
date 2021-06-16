import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductDetails = (props) => {
    // get code from url
  let ids = props.match.params.Code;
  
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const Products = async () => {
      //api
      const result = await axios.get(
        "https://localhost:44371/api/Product/" + ids
      );
      setProduct(result.data);
    };
    Products();
  });
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <table className="table">
          <thead>
            <tr>
              <th colSpan="2">Product Details</th>
            </tr>
          </thead>
          <tbody>
            {product.map((item) => (
              <>
              <tr>
                  <td>Code</td>
                  <td>{item.Code}</td>
                </tr>
                <tr>
                  <td>Name</td>
                  <td>{item.Name}</td>
                </tr>
                <tr>
                  <td>Scale</td>
                  <td>{item.Scale}</td>
                </tr>
                <tr>
                  <td>Vendor</td>
                  <td>{item.Vendor}</td>
                </tr>
                <tr>
                  <td>Description</td>
                  <td>{item.PdtDescription}</td>
                </tr>
                <tr>
                  <td>Quantity in stock</td>
                  <td>{item.QtyInStock}</td>
                </tr>
                <tr>
                  <td>BuyPrice</td>
                  <td>{item.BuyPrice}</td>
                </tr>
                <tr>
                  <td>MSRP</td>
                  <td>{item.MSRP}</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
        <Link to="/ProductApi">Back</Link>
      </div>
    </div>
  );
};
export default ProductDetails;
