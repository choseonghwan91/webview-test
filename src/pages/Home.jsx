import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
const navigate = useNavigate();

  return (
    <div>
      home
      <button onClick={()=> navigate('/addthis')}>go addthis</button>
    </div>
  );
};

export default Home;