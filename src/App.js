import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/Layouts/AuthLayout";
import DefaultLayout from "./components/Layouts/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
  const findLayout = ({ auth, empty }) => {
    let Layout = DefaultLayout;
    if (auth) {
      Layout = AuthLayout;
    } else if (empty) {
      Layout = Fragment;
    }
    return Layout;
  };

  return (
    <Routes>
      {publicRoutes.map(({ Component, ...props }, index) => {
        const Layout = findLayout(props);
        return (
          <Route
            {...props}
            key={index}
            element={
              <Layout>
                <Component />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
