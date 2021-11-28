import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import NoMatch from './Components/NoMatch/NoMatch';
import ClubDetails from './Components/ClubDetails/ClubDetails';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<NoMatch />}/>
          <Route path= 'club/:name/:id' element={<ClubDetails />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
