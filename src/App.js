import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutSection from './About/AboutSection';
import AllServices from './AllServices/AllServices';
import './App.css';
import ContactSection from './ContactSection/ContactSection';
import Error from './Error/Error';
import FooterSection from './Footer/FooterSection';
import Home from './Home/Home';
import NavSelf from './Navbar/NavSelf';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <NavSelf></NavSelf>
            <AllServices></AllServices>
            <FooterSection></FooterSection>
          </Route>
          <Route path="/about">
            <NavSelf></NavSelf>
            <AboutSection></AboutSection>
            <FooterSection></FooterSection>
          </Route>
          <Route path="/contact">
            <NavSelf></NavSelf>
            <ContactSection></ContactSection>
            <FooterSection></FooterSection>
          </Route>

          <Route path="*">
            <Error></Error>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
