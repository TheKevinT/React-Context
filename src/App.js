import React, { useState } from "react";
import { UserContext } from "./Context/UserContext";
import AppRouter from "./Routes/AppRouter";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  );
};

export default App;
