import { useEffect, useState } from "react";
import axios from "axios";

export const useResources = resource => {
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
