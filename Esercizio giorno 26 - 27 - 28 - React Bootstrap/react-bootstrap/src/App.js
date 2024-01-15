import { Container } from 'react-bootstrap';
import './App.css';
import AllTheBooks from './Components/AllTheBooks';
import MyFooter from './Components/MyFooter';
import MyNav from './Components/MyNav'
import Welcome from './Components/Wecome'
/* import BookList from './Components/BookList'; */




function App() {
  return (
    <>
      <MyNav/> {/*inserisci il componente my nav */}
      <Container>
        <Welcome/>
        <AllTheBooks/>
        {/* <BookList/> */}
      </Container>
      <MyFooter/>
    </>
  );
}

export default App;
