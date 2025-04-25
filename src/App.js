import React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import WizardLogo from './app/assets/img/logo.png';
import './App.css';
import WidgetCard from './features/widgets/WidgetCard';

function App() {
  return (
    <div className='app'>
      <Navbar dark color='primary' sticky='top' expand='md'>
        <Container>
          <NavbarBrand href='/'>
              <img src={WizardLogo} alt='Wizard Logo'/>
            </NavbarBrand>
        </Container>
      </Navbar>
      Im ready im ready im ready.
    </div>
  );
}

export default App;
