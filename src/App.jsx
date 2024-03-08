import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home";
import Signin from "./components/pages/Signin";
import Singup from "./components/pages/Singup";
import Forgetpass from "./components/pages/Forgetpass";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
   <Route>
     <Route path="/" element={<Home/>}></Route>
    <Route path="/signin" element={<Signin/>}></Route>
    <Route path="/singup" element={<Singup/>}></Route>
    <Route path="/forgetpass" element={<Forgetpass/>}></Route>
   </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
