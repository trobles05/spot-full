import React from "react";
import SingleItem from "./SingleItem";

const Itemlist = ({ title, items, itemsArry }) => {
  // console.log(title, items);
  return (
    <div className="item_list">
      <div className="item-list__header">
        <h2> {title} populares</h2>
        <a className="itme-list__link" href="/">
          Mostar tudo
        </a>
      </div>
      <div className="item-list__container">
        {itemsArry
          .filter((currentValeu, index) => index < items)
          .map((currObj, index) => (
            <SingleItem {...currObj} key={`${title}- ${index} `} />
          ))}
      </div>
    </div>
  );
};

export default Itemlist;
