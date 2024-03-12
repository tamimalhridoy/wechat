import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Singup from "./pages/Singup";
import Forgetpass from "./pages/Forgetpass";
import Layout from "./components/Layout";
import Chat from "./pages/Chat";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/singup" element={<Singup />}></Route>
        <Route path="/forgetpass" element={<Forgetpass />}></Route>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/chat" element={<Chat />}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
