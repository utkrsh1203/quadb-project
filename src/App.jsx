import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ShowInfo from "./routes/ShowInfo";
import Shows from "./routes/Shows";

import "./App.css";

function App() {
  return (
    <div>
      <div className=' text-gray-200 py-3'>
        {/* Hello World */}
        <Router>
          <Routes>
            <Route path='/' element={<Shows />}></Route>
            <Route path='/:name' element={<ShowInfo />}></Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
