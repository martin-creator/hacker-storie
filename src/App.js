import * as React from "react";
import List from "./components/list";
import Search from "./components/search";
import {useState} from 'react';

const App = () => {
  const stories = [
    {
      title: "React",
      url: "https://reactjs.org/",
      author: "Jordan Walke",
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: "Redux",
      url: "https://redux.js.org/",
      author: "Dan Abramov, Andrew Clark",
      num_comments: 2,
      points: 5,
      objectID: 1,
    },
  ];

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1> My Hacker Stories</h1>
      <Search onSearch = {handleChange} />
      {/* This is how you comment in JSX */}

      <hr />

      <List list={stories} />
    </div>
  );
};

export default App;
