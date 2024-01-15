import './App.css';
import HomePage from './pages/HomePage';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import TVShows from './pages/TVShows';
import Movies from './pages/Movies';
import RecentlyAdded from './pages/RecentlyAdded';
import MyList from './pages/MyList';
import NotFoundPage from './pages/NotFoundPage';
import Menu from './Components/Menu'

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <Menu/>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage/>}/> {/* questa è una rotta,  element = componente, caricare se il part è = a /*/}
            <Route path="/tvshows" element={<TVShows/>}/> {/*/about = rotta statica */}
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/recently-added" element={<RecentlyAdded/>}/> 
            <Route path="/my-list" element={<MyList/>}/>
            <Route path="*" element={<NotFoundPage/>}/> {/*se non sono nessuna delle 3 carica la pagina Homepage */}
          </Routes>
        </Container>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
