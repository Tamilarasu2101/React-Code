import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import qs from "qs";
function EditProduct(props) {
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
  // const [product, setNewProduct] = useState({
  //   Code: "",
  //   ProductlineId: "",
  //   Name: "",
  //   Scale: "",
  //   Vendor: "",
  //   PdtDescription: "",
  //   QtyInStock: "",
  //   BuyPrice: "",
  //   MSRP: "",
  // });

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async () => {
    var prod = {
      Code: product.Code,
      ProductlineId: product.ProductlineId,
      Name: product.Name,
      Scale: product.Scale,
      Vendor: product.Vendor,
      PdtDescription: product.PdtDescription,
      QtyInStock: product.QtyInStock,
      BuyPrice: product.BuyPrice,
      MSRP: product.MSRP,
    };
    const response = await axios.put(
      "https://localhost:44371/api/Product/" + props.Code,
      qs.stringify(prod)
    );
    setProduct({
      Code: response.prod.Code,
      ProductlineId: response.prod.ProductlineId,
      Name: response.prod.Name,
      Scale: response.prod.Scale,
      Vendor: response.prod.Vendor,
      PdtDescription: response.prod.PdtDescription,
      QtyInStock: response.prod.QtyInStock,
      BuyPrice: response.prod.BuyPrice,
      MSRP: response.prod.MSRP,
    });
  };
  return (
    <>
      <div className="container">
        <div className="col-md-3 offset-md-4 mt-5 justify-content-center">
          <h2>Edit Product</h2>
          <form>
            {product.map((item) => (
              <>
                <input
                  type="text"
                  id="Code"
                  className="form-control mt-2"
                  name="Code"
                  placeholder="Code"
                  onChange={handleChange}
                  value={item.Code}
                />
                <input
                  type="text"
                  id="ProductlineId"
                  className="form-control mt-2"
                  name="ProductlineId"
                  placeholder="ProductlineId"
                  onChange={handleChange}
                  value={item.ProductlineId}
                />
                <input
                  type="text"
                  id="Name"
                  className="form-control mt-2"
                  name="Name"
                  placeholder="Name"
                  onChange={handleChange}
                  value={item.Name}
                />
                <input
                  type="text"
                  id="Scale"
                  className="form-control mt-2"
                  name="Scale"
                  placeholder="Scale"
                  onChange={handleChange}
                  value={item.Scale}
                />
                <input
                  type="text"
                  id="Vendor"
                  className="form-control mt-2"
                  name="Vendor"
                  placeholder="Vendor"
                  onChange={handleChange}
                  value={item.Vendor}
                />
                <input
                  type="text"
                  id="PdtDescription"
                  className="form-control mt-2"
                  name="PdtDescription"
                  placeholder="PdtDescription"
                  onChange={handleChange}
                  value={item.PdtDescription}
                />
                <input
                  type="text"
                  id="QtyInStock"
                  className="form-control mt-2"
                  name="QtyInStock"
                  placeholder="QtyInStock"
                  onChange={handleChange}
                  value={item.QtyInStock}
                />
                <input
                  type="text"
                  id="BuyPrice"
                  className="form-control mt-2"
                  name="BuyPrice"
                  placeholder="BuyPrice"
                  onChange={handleChange}
                  value={item.BuyPrice}
                />
                <input
                  type="text"
                  id="MSRP"
                  className="form-control mt-2"
                  name="MSRP"
                  placeholder="MSRP"
                  onChange={handleChange}
                  value={item.MSRP}
                />
                <input
                  type="submit"
                  value="Edit"
                  className="btn btn-danger btn-block mt-2"
                  name="Edit"
                  onClick={handleSubmit}
                />
              </>
            ))}
          </form>
          <Link to="/productApi" className="btn btn-secondary btn-block mt-2">
            Products List
          </Link>
        </div>
      </div>
    </>
  );
}

export default EditProduct;
