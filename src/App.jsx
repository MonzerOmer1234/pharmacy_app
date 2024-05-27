import {
 
  Route,

  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Contact from "./pages/Contact";
import RootLayout from "./pages/RouteLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="store" element={<Store />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
