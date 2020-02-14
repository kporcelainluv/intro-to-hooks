import React, { useState } from "react";

export const App = () => {
  const [resource, setResource] = useState("post");
  return (
    <div>
      <div>
        <button
          onClick={() => {
            setResource("posts");
          }}
        >
          Posts
        </button>
        <button
          onClick={() => {
            setResource("todos");
          }}
        >
          Todos
        </button>
      </div>
      {resource}
    </div>
  );
};
