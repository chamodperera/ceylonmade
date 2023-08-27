import "./App.css";
import { RouterProvider } from "react-router-dom";
import { getCurrentUser, observer } from "./services/getCurrentUser";
import { useEffect, useState } from "react";
import { router } from "./routes";
import Loading from "./pages/Loading";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [_currentUser, setCurrentUser] = useState(getCurrentUser());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    observer.subscribe("authStateChanged", (user) => {
      setCurrentUser(user);
      setIsLoading(false);

      if (!user) return router.navigate("/login");
    });
    return () => {
      observer.unsubscribe("authStateChanged");
    };
  }, []);

  return isLoading ? <Loading /> : <RouterProvider router={router} />;
}

export default App;
