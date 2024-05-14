import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetcher = ({ url, setData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [url, setData]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return null;
};
