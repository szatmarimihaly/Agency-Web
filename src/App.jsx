import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Apply from "./pages/Apply.jsx";

function App() {

    return (
    <>

        <Router>
            <Routes>
                <Route path = "/" element = {<Home/>}/>
                <Route path = "/apply" element = {<Apply/>}></Route>
            </Routes>
        </Router>

    </>
  )
}
export default App
