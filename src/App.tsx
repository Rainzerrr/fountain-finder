import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/header";
import Homepage from "./pages/homepage/homepage";
import Discover from "./pages/discover/discover";
import Contact from "./pages/contact/contact";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/decouvrir" element={<Discover />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;

