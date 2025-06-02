import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Services from "./pages/ServicePage/ServicePage"
import About from "./pages/AboutPage/AboutPage"
import { Contact } from "./pages/ContactPage/ContactPage"

const App = () => {
  return (
    <div>
        <Router>
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/services" element={<Services/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
        </Router>
    </div>
  )
}

export default App

