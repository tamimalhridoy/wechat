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
import Groups from "./pages/Groups";
import Friends from "./pages/Friends";
import People from "./pages/People";

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
          <Route path="/group" element={<Groups/>}></Route>
          <Route path="/friend" element={<Friends/>}></Route>
          <Route path="/people" element={<People/>}></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
