import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Landing from "./components/Landing";
import MainNav from "./components/MainNav";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <Router>
        <MainNav />
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Landing typeUser="Admin" />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
