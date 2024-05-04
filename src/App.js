import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import UserProvider from './context/UserProvider'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from "./components/Navbar/Navbar"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import Specials from './components/Specials/Specials';
import './App.css';


function App() {
  const user = { name: 'John Doe' }; 

  return (
    <div>
      <UserProvider user={user}>
        <ThemeProvider>
          <Router>
            <React.Fragment>
              <Navbar />
              <Main />
              <Specials/>
              <Footer />
            </React.Fragment>
          </Router>
        </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
