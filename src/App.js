import React from "react";

import "./App.css";
import CommentDetail from "./components/CommentDetail.js";

function App() {
  return (
    <div className="ui container comments">
      <CommentDetail authorName={"Sam"} />
      <CommentDetail authorName={"Alex"} />
      <CommentDetail authorName={"Jane"} />
    </div>
  );
}
export default App;
