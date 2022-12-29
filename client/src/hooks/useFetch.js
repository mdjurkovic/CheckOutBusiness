import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export const useFetch = (url) => {
  const baseUrl = "http://localhost:5000/";
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(baseUrl + url, { params: { username: "admin", password: "123" } })
      .then((r) => setData(r.data))
      .catch((e) => "exc " + e.toString())
      .finally((r) => setLoading(false));
  }, [url]);

  return { isLoading: loading, error, response: data };
};
