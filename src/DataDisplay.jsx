import React, { useState, useEffect } from "react";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
function DataDisplay() {
  const [product, setProduct] = useState(""); //intialy product="" ==>false
  // '',null,0,undefined,false
  const [couter, setCounter] = useState(0);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data); //product=data
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <img
        className="img"
        src="https://t3.ftcdn.net/jpg/01/17/33/22/360_F_117332203_ekwDZkViF6M3itApEFRIH4844XjJ7zEb.jpg"
        alt="image"
      />
      <h1 className="mob">PRODUCTS</h1>
      <div className="slider">
        <button
          className="btn1"
          onClick={() => {
            couter > 0 ? setCounter(couter - 1) : setCounter(4);
          }}
        >
          &lt;
        </button>
        <div className="product">
          {product &&
            product.products
              .map((item) => {
                return (
                  <div className="pro" key={item.id}>
                    {/* <div >{item.images.map((item,index)=>{
            return(
              // <div>{item}</div>
              <img src={item} alt="not"/>
            )
          })}</div> */}
                    {/* <div>{item.id}</div> */}
                    <img src={item.images[0]} alt="not" />
                    <div className="price">
                      <span>price-</span>
                      {item.price}
                      <AttachMoneyIcon id="dollar" />
                    </div>
                    <div>
                      <span>title- </span>
                      {item.title}
                    </div>
                    <div className="des">
                      <span>description-</span>
                      {item.description}
                    </div>
                  </div>
                );
              })
              .slice(couter, couter + 1)}
        </div>
        <button
          className="btn1"
          onClick={() => {
            couter < 4 ? setCounter(couter + 1) : setCounter(0);
          }}
        >
          &gt;
        </button>
      </div>
    </>
  );
}
export default DataDisplay;
