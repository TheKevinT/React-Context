import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const About = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <h1>About</h1>
      {user && (
        <h2>
          {user.data.first_name} {user.data.last_name}
        </h2>
      )}
    </>
  );
};

export default About;
