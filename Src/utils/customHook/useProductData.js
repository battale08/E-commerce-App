import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

const useProductData = url => {
  const [data, setData] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        Alert.alert('Error', 'Login failed. Please check your credentials.');
      }
    };

    fetchData();
  }, [url]);

  return {data};
};

export default useProductData;
