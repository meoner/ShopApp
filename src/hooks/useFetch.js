import axios from 'axios';
import {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

export function useFetch(url, config, param) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchData() {
    setLoading(true);
    const {data: serverData} = await axios
      .get(url, config)
      .catch((serverError) => {
        setLoading(false);
        setError(serverError);
      });

    setLoading(false);

    param === 'All Categories'
      ? setData([param, ...serverData])
      : setData(serverData);
  }
  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return {data, loading, error, fetchData};
}
