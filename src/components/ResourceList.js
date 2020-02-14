import React, { useState, useEffect } from "react";
import axios from "axios";

export const ResourceList = ({ resource }) => {
  const [resources, setResources] = useState([]);

  const fetchResource = async resource => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/${resource}`
    );
    setResources(res.data);
  };

  useEffect(() => {
    fetchResource(resource);
  }, [resource]);
  return (
    <div>
      <ul>
        {resources.map(record => {
          return <li key={record.id}>{record.title}</li>;
        })}
      </ul>
    </div>
  );
};
