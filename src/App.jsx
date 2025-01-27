import { RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer/Footer";
import Header from "./Component/Shared/Header/Header";
import router from "./Routers/Routers";

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
