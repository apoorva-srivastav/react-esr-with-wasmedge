import React from 'react';
import { ProductList } from '../Products/ProductList';


const Home = ({data}) => {
  return (
    <div className="home">
      <ProductList data={data}/>
    </div>
  );
}

export default Home;
