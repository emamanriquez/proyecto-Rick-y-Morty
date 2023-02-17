import './App.css'
// import Card from './components/Card.jsx'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav.jsx'
import About  from './components/about/About.jsx'
import Detail from './components/detail/detail.jsx'
import Form from './components/form/Form.jsx';
import Favorites from './components/favorites/favorites'
import { useEffect, useState} from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'



function App () {
const [characters, setCharacters] = useState([]);
const location = useLocation();
const [access, setAccess] = useState(false);
const username = 'emamanriquez1991@gmail.com';
const password = 'qwerty1'
const navigate = useNavigate();


function logout () {
  setAccess(false);
};

function login(userData) {
  if (userData.password === password && userData.username === username) {
     setAccess(true);
     navigate('/home');
  }
}
useEffect(() => {
  !access && navigate('/');
}, [access]);

function onSearch(character) {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
  .then((response) => response.json())
  .then((data) => {
    if (data.name) {
      setCharacters((oldChars) => [...oldChars, data]);
    } else {
      window.alert('No hay personajes con ese ID');
    }
  });
}
const onClose = (id) => {
  setCharacters(characters.filter((char) => char.id !== id));
};

const random = () => {
let randomId = Math.floor(Math.random() * 826)
onSearch(randomId);

};


  return (
    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !=="/" && <Nav onSearch={onSearch} random={random} logout={logout}/>}
      
    
      
     <Routes>
      <Route path="/" element={ <Form login={login} /> }/>
      </Routes>
       <Routes>
        <Route path="/home" element={ <Cards characters = {characters} onClose = {onClose}/> } /> 
        <Route path="/about" element={ <About/> } />
        <Route path="/detail/:detailId" element={ <Detail /> } /> 
        <Route path="/favorites" element={<Favorites />} />
       </Routes>


    </div>
  )
}

export default App
