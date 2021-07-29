// ===========
// Css Imports
// ===========
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// ======================
// React Boostrap Imports
// ======================
import { Container } from "react-bootstrap";

// =================
// Component Imports
// =================
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Books from "./Components/Books";
import Add from "./Components/Form";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Container>
      <Navbar />
      <Landing />
      <Books />
      <Add />
      <Contact />
      <Footer />
    </Container>
  );
}

export default App;

// ====
// Note
// ====
// Submit Button Will Appear When Your Fill All Fields
