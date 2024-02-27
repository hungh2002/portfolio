import { useEffect, useState } from 'react';
import { apiGet } from '../service/api-axios.js';

const SocialNetwork = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  });

  const getData = async () => {
    const result = await apiGet({ type: 'social-network' });
    setData(result.data);
  };

  const mapData = () => {
    return data.map((element) => {
      return (
        <i key={element.id} className={`fa-brands fa-${element.name}`}></i>
      );
    });
  };

  return <div className='social-network'>{mapData()}</div>;
};

export default SocialNetwork;
