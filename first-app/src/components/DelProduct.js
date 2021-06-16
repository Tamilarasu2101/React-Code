import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function DelProduct(props) {
  let ids = props.match.params.Code;
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const Products = async () => {
      //api
      const result = await axios.delete(
        "https://localhost:44371/api/Product/" + ids
      );
      setProduct(result.data);
    };
    Products();
  });
  return (
    <>
      <div className="row">
        <div className="col-12 text-center mt-5">
          <Link to="/ProductApi" className="btn btn-dark">Back</Link>
        </div>
      </div>
    </>
  );
}

export default DelProduct;
