import React, { useState, useEffect, Component } from 'react';
import Card from './Card';
import { getMainData } from './apiControl';
import { API } from './config';

const Home = () => {
  const [mainData, setMainData] = useState([]);
  const [error, setError] = useState(false);

  const loadData = () => {
    getMainData().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setMainData(data);
      }
    });
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    //render images on home page
    <div>
      <div className='mainContainer'>
        {mainData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Home;

