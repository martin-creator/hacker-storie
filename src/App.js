import * as React from "react";
import List from "./components/list";
import Search from "./components/search";



function App() {
  return (
    <div>
      <h1> My Hacker Stories</h1>
      <Search />
      {/* This is how you comment in JSX */}

      <hr />

      <List />
      
    </div>
  );
}

export default App;
