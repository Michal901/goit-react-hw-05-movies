import PropTypes from 'prop-types';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const DataFetcher = ({ url, dataType, setData }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        if (dataType === 'results') {
          setData(response.data.results);
        } else if (dataType === 'cast') {
          setData(response.data.cast);
        } else {
          setData(response.data);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, [url, setData, dataType]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return null;
};
DataFetcher.propTypes = {
  url: PropTypes.string.isRequired,
  dataType: PropTypes.oneOf(['results', 'cast', undefined]).isRequired,
  setData: PropTypes.func.isRequired,
};
