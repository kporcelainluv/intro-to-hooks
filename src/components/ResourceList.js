import React from "react";
import { useResources } from "./useResources";
import { UserList } from "./UserList";

export const ResourceList = ({ resource }) => {
  const resources = useResources(resource);
  return (
    <div>
      <UserList />
      <ul>
        {resources.map(record => {
          return <li key={record.id}>{record.title}</li>;
        })}
      </ul>
    </div>
  );
};
