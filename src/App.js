import * as React from "react";
import List from "./components/list";
import Search from "./components/search";
import { useState, useEffect } from "react";

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

   const useSemiPersistentState = (key, initialState) => {
    const [value, setValue] = useState(
      localStorage.getItem(key) || initialState
    );
    useEffect(() => {
      localStorage.setItem(key, value);
    }, [value, key]);
    return [value, setValue];
  };

  const [searchTerm, setSearchTerm] = useSemiPersistentState("search","React");

 

  useEffect(() => {
    localStorage.setItem("search", searchTerm);
  }, [searchTerm]);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchedStories = stories.filter(function (story) {
    return story.title.toLowerCase().includes(searchTerm);
  });

  return (
    <div>
      <h1> My Hacker Stories</h1>
      <Search search={searchTerm} onSearch={handleChange} />
      {/* This is how you comment in JSX */}
      <h2>
        <strong>{searchTerm}</strong>
      </h2>

      <hr />

      <List list={searchedStories} />
    </div>
  );
};

export default App;
