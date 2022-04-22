import React, { useEffect } from "react";
import "../Styles/women.css";

const Womens = () => {
  let [data, setData] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await fetch("http://localhost:3000/women");
        let Data = await res.json();
        setData(Data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  console.log(data);
  return (
    <div className="Container">
      {data.map((ele, index) => {
        return (
          <div >
              <img src={ele.image} alt="" />
              <h4>{ele.name}</h4>
              <p>Rs.{ele.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Womens;
