/*
  Note Custom Hooks 
    Bulding your own Hooks  (https://legacy.reactjs.org/docs/hooks-custom.html)


    This Function is good becuase 
    CHANGES


    Note we could still use this if we want but we made it a little simpler
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(response);
        }

    Note !! Double Exclamation [Loggical NOT (!)] Operator  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT

    Note how we are Destructring Fetch for all our CRUD operations in One Commmand vs having 4 commands
        *** If you create all 4 crud commands you can consolidate them into one big function.



*/

/* Replaced by Super Fetch Command
import React from "react";

export function useFetch(url) {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setError(null);
        setLoading(false);
      })
      .catch((error) => {
        console.warn(error.message);
        setError("error loading data");
        setLoading(false);
      });
  }, [url]); //Dependency Array

  return {
    loading,
    data,
    error,
  };
}

*/

const defaultHeaders = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

async function fetchData({ path, method, data, headers }) {
  const response = await fetch(path, {
    method: method,
    body: !!data ? JSON.stringify(data) : null,
    headers: !!headers ? headers : defaultHeaders,
  }).then((response) => response.json());
  return response;
}

export function useFetch() {
  return {
    get: (path, headers) =>
      fetchData({
        path: path,
        method: "GET",
        data: null,
        headers: headers,
      }),
    post: (path, data, headers) =>
      fetchData({
        path: path,
        method: "POST",
        data: data,
        headers: headers,
      }),
    put: (path, data, headers) =>
      fetchData({
        path: path,
        method: "PUT",
        data: data,
        headers: headers,
      }),
    del: (path, headers) =>
      fetchData({
        path: path,
        method: "DELETE",
        data: null,
        headers: headers,
      }),
  };
}

export default useFetch;
