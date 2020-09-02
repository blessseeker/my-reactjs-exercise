import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Kamaludin Khoir",
      image:
        "https://cdn.idntimes.com/content-images/avatar/kamaludin-khoir_200x200.jpg?v=80782c83ffa0f09ef565e33687c7ed8b",
      places: 1,
    },
    {
      id: "u2",
      name: "Usi Supinar",
      image:
        "https://pbs.twimg.com/profile_images/852513364550877184/922tr-_V.jpg",
      places: 2,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
