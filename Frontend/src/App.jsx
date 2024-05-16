import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreateBooks from "./pages/CreateBooks";
import ShowBooks from "./pages/ShowBooks";
import EditBooks from "./pages/EditBooks";
import DeleteBooks from "./pages/DeleteBooks";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route className="/" path="" element={<Home />}></Route>
      <Route
        className="/books/create"
        path=""
        element={<CreateBooks />}
      ></Route>
      <Route
        className="/books/details/:id"
        path=""
        element={<ShowBooks />}
      ></Route>
      <Route
        className="/books/edit/:id"
        path=""
        element={<EditBooks />}
      ></Route>
      <Route
        className="/books/delete/:id"
        path=""
        element={<DeleteBooks />}
      ></Route>
    </Routes>
  );
}

export default App;
