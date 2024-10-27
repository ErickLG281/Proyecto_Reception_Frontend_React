import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectRoute } from "./components/ProtectRoute";
import { useEffect, useState } from "react";
import About from "./container/pages/About";
import Error404 from "./container/error/Error404";
import Home from "./container/pages/Home";
import Reception from "./container/pages/Reception";
import CompanySingUp from "./container/pages/CompanySignUp";
import CompanySingIn from "./container/pages/CompanySignIn";
import Category from "./components/reception/Category";
import CardReception from "./components/reception/CardReception";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    const storedRol = localStorage.getItem("rolName");

    if (storedFullName && storedRol) {
      setUser({
        fullName: storedFullName,
        rolName: [storedRol],
      });
    }
  }, []);

  const login = (fullName, rolName) => {
    setUser({
      fullName: fullName,
      rolName: [rolName],
    });
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("fullName");
    localStorage.removeItem("rolName");
    document.cookie =
      "fullName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie =
      "rolName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Error404 />} />
          <Route path="/" element={<Home />} />
          <Route path="/reception/category" element={<Reception />} />
          <Route path="/reception/category/:id/:name" element={<Reception />} />
          <Route path="/about-us" element={<About />} />

          {/* <Route
            element={
              <ProtectRoute
                isAllowed={!!user && user.rolName.includes("COMPANY")}
              />
            }
          >
            <Route path="/reception" element={<Reception />} />
            <Route path="/about-us" element={<About />} />
          </Route> */}
          <Route path="/company/register" element={<CompanySingUp />} />
          <Route
            path="/company/login"
            element={<CompanySingIn onLogin={login} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
