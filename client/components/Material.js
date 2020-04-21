import React, { Component, Fragment, useState, useEffect } from 'react';

const Material = ({ item }) => {
  console.log(item);

  return (
    <div className="materialContainer">
      <p>{item.name}</p>
      <p>{item.type}</p>
      <a href={item.purchase_link}>Buy Here</a>
    </div >
  );
};

export default Material;
