import React from 'react';
import ReactDOM from 'react-dom/client';
import aimage from './images/asabeneh.jpg';
import cssLogo from './images/css_logo.png';
import htmlLogo from './images/html_logo.png';
import reactLogo from './images/react_logo.png';

const User = ({firstName, image}) => (
  <>
    <img src={image} alt={firstName} />
  </>
);

const Age = (props) => <div>The person is {props.age} years old.</div>
const Weight = (props) => (<p>The weight of the object on earth is {props.weight} N.</p>)

const Number = () => {
  const currentYear = 2024;
  const birthYear = 1979;
  const age = currentYear - birthYear;
  const gravity = 9.81
  const mass = 75
  return (
    <div>
      <Age age={age} />
      <Weight weight={gravity * mass} />
      <Status status={age >= 18}/>
    </div>
  )
}

const showDate = (time) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const month = months[time.getMonth()].slice(0,3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date} ${year}`;
};

const Status = (props) => {
  const status = props.status ? 'Old enough to drive' : 'Too young to drive';
  return <p>{status}</p>
}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>

// JSX element, header
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: {firstName, lastName },
    date
  }
}) => {
  return (<header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>
        {firstName} {lastName}
      </p>
      <small>Date: {showDate(date)}</small>
    </div>
  </header>);
}

const UserCard = ({user: {firstName, lastName, image}}) => {
  return (
  <div className='user-card'>
    <User firstName={firstName} image={image} />
    <h2>{firstName} {lastName}</h2>
  </div>
  )
}

// JSX element, main
const TechList = ({techs}) => {
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted;
}

// JSX element, main
const Main = ({user, techs}) => {
  return (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <HexaColor />
    </div>
  </main>
  );
}

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

// JSX element, footer
const Footer = ({copyRight}) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()} &copy;</p>
    </div>
  </footer>
)

// JSX element, app
const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh'
    },
    date: new Date()
  };

  const user = { ...data.author, image: aimage };
  const techs = ['HTML', 'CSS', 'JavaScript'];
  
  const sayHi = () => {
    alert('Hi');
  }

  const greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020');
  }

  return (
    <div className='app'>
    <Header 
      data={data}
    />
    <Number />
    <Button onClick={sayHi} text="Say Hi" />
    <Button onClick={greetPeople} text="Greet People" />
    <Button onClick={() => alert('MSP')} text="MSP" />
    <Main
      user={user} 
      techs={techs} 
    />
    <Footer copyRight={data.date}/>
  </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
