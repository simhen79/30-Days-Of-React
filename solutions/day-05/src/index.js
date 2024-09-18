import React from 'react';
import ReactDOM from 'react-dom/client';
import aimage from './images/asabeneh.jpg';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';

const User = () => (
  <>
    <img src={aimage} alt='Aimage' />
  </>
);

const logos = (
  <>
    <img src={cssLogo} alt='' />
    <img src={htmlLogo} alt='' />
    <img src={reactLogo} alt='' />
  </>
);

const welcome = 'Welcome to 30 Days Of React'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'

// JSX element, header
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        Instructor: {author.firstName} {author.lastName}
      </p>
      <small>Date: {date}</small>
    </div>
  </header>
)

const numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {author.firstName} {author.lastName} is {age} years old
  </p>
)

const UserCard = () => (
  <div className='user-card'>
    <User />
    <h2>Some Image</h2>
  </div>
)

// JSX element, main
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript'];
  const techsFormatted = techs.map((tech) => <li>{tech}</li>)
  return techsFormatted;
}

// JSX element, main
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard />
      <HexaColor />
    </div>
  </main>
);

const hexaColor = () => {
  const str = '0123456789abcdef';
  let color = '';
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return '#' + color;
};

const HexaColor = () => <div>{hexaColor()}</div>

const copyRight = 'Copyright 2020'

// JSX element, footer
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)

// JSX element, app
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
