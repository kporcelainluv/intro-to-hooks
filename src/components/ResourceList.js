import React, { useState, useEffect } from "react";
import axios from "axios";

const useResources = resource => {
  const [resources, setResources] = useState([]);

  useEffect(() => {
    (async resource => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResources(res.data);
    })(resource);
  }, [resource]);
  return resources;
};

export const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
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
