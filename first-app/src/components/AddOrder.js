import React, { useState } from "react";
import axios from "axios";
import qs from "qs";

const AddOrder = () => {
  const [product, setProduct] = useState({
    Code: "",
    ProductlineId: "",
    Name: "",
    Scale: "",
    Vendor: "",
    PdtDescription: "",
    QtyInStock: "",
    BuyPrice: "",
    MSRP: "",
  });

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
    const response = await axios.post(
      "https://localhost:44371/api/Product",
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
          <h2>Add Order</h2>
          <form>
            <input
              type="text"
              id="Code"
              className="form-control mt-2"
              name="Code"
              placeholder="Code"
              onChange={handleChange}
              value={product.Code}
            />
            <input
              type="text"
              id="ProductlineId"
              className="form-control mt-2"
              name="ProductlineId"
              placeholder="ProductlineId"
              onChange={handleChange}
              value={product.ProductlineId}
            />
            <input
              type="text"
              id="Name"
              className="form-control mt-2"
              name="Name"
              placeholder="Name"
              onChange={handleChange}
              value={product.Name}
            />
            <input
              type="text"
              id="Scale"
              className="form-control mt-2"
              name="Scale"
              placeholder="Scale"
              onChange={handleChange}
              value={product.Scale}
            />
            <input
              type="text"
              id="Vendor"
              className="form-control mt-2"
              name="Vendor"
              placeholder="Vendor"
              onChange={handleChange}
              value={product.Vendor}
            />
            <input
              type="text"
              id="PdtDescription"
              className="form-control mt-2"
              name="PdtDescription"
              placeholder="PdtDescription"
              onChange={handleChange}
              value={product.PdtDescription}
            />
            <input
              type="text"
              id="QtyInStock"
              className="form-control mt-2"
              name="QtyInStock"
              placeholder="QtyInStock"
              onChange={handleChange}
              value={product.QtyInStock}
            />
            <input
              type="text"
              id="BuyPrice"
              className="form-control mt-2"
              name="BuyPrice"
              placeholder="BuyPrice"
              onChange={handleChange}
              value={product.BuyPrice}
            />
            <input
              type="text"
              id="MSRP"
              className="form-control mt-2"
              name="MSRP"
              placeholder="MSRP"
              onChange={handleChange}
              value={product.MSRP}
            />
            <input
              type="submit"
              value="Add"
              className="btn btn-danger btn-block mt-2"
              name="Add"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default AddOrder;
