import React, { useContext } from "react";
import { UserContext } from "../Context/UserContext";

const About = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <>
      <div className="container text-center mt-5">
        <h1>About</h1>
        {!user ? (
          <h2 className="text-danger"> Please login!!</h2>
        ) : (
          <div>
            <img
              src={user.data.avatar}
              alt={user.data.id}
              width="150px"
              height="150px"
              className="mb-3"
            />
            <h3>
              <strong>Name:</strong> {user.data.first_name}
              {user.data.last_name}
            </h3>
            <h3>
              <strong>Email:</strong> {user.data.email}
            </h3>
          </div>
        )}
      </div>
    </>
  );
};

export default About;
