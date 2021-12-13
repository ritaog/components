import React from "react";
import faker from "faker";

import "./App.css";
import CommentDetail from "./components/CommentDetail.js";
import ApprovalCard from "./components/ApprovalCard";

function App() {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Nice blog post!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Today at 2:00AM"
          comment="Lovely post!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="Yesterday at 5:01PM "
          comment="Quite insightful!"
          image={faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
}
export default App;
