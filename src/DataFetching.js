import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  error: "",
  post: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        loading: false,
        post: action.payload,
        error: ""
      };
    case "ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong"
      };
    default:
      return state;
  }
};
function DataFetching() {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(res => {
        dispatch({ type: "FETCH_DATA", payload: res });
      })
      .catch(error => {
        dispatch({ type: "ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.post.body}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetching;
