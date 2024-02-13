import { Route, Routes } from "react-router-dom";
import DetailUser from "../../pages/DetailUser";
import React from "react";
import Registration from "../../pages/Registration";
import Catalog from "../../pages/Catalog";
import PrivateRoute from "./PrivateRoute";

const Routing: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Registration />} />
      <Route
        path="/catalog"
        element={
          <PrivateRoute>
            <Catalog />
          </PrivateRoute>
        }
      />
      <Route path="/catalog/:id" element={<DetailUser />} />
      <Route path="*" element={<h2>Страница не найдена</h2>} />
    </Routes>
  );
};
export default Routing;
