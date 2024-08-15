import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Logo } from "./components/Logo";
import { Registration } from "./pages/Registration";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="registration" element={<Registration />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;