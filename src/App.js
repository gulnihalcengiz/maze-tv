import React,{useEffect, useState} from 'react';
import './App.css';
import MovieBox from './MovieBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, FormControl, Button} from 'react-bootstrap';


const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=9a1775789f6e4ba04dadfc63125f8993";
const API_SEARCH="https://api.themoviedb.org/3/search/movie?api_key=9a1775789f6e4ba04dadfc63125f8993&query";

function App() {

  const [movies, setMovies]=useState([]);
  const [query, setQuery]=useState('');

  useEffect(() => {
    fetch(API_URL)
    .then((res) =>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])

const searchMovie = async (e)=>{
  e.preventDefault();
  console.log("Searching");
  try{
    const url=`https://api.themoviedb.org/3/search/movie?api_key=9a1775789f6e4ba04dadfc63125f8993&query=${query}`;
    const res= await fetch(url);
    const data= await res.json();
    console.log(data);
    setMovies(data.results);
  }
  catch(e){
    console.log(e);
  }
}

const changeHandler=(e)=>{
  setQuery(e.target.value)
}

return (
    <>
    <Navbar bg="muted" expand="lg" variant="light" >
    <Container className='my-2'>

      <Navbar.Brand href="/home"><h5>Maze-TV</h5></Navbar.Brand>
      <Navbar.Brand href="/home"><h5>Trending</h5></Navbar.Brand>
      <Navbar.Brand href="/home"><h5>Movies</h5></Navbar.Brand>
      <Navbar.Brand href="/home"><h5>TV Series</h5></Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll">

        <Navbar.Collapse id="navbarScroll" className='bg-dark' >
          <Nav className="me-2 my-2 my-lg-3 bg-dark"
          navbarScroll></Nav>
          </Navbar.Collapse>
          </Navbar.Toggle>
          <Form id='form' className="d-flex" onSubmit={searchMovie}>
            <FormControl
            type="search"
            placeholder="Movie Search"
            className="me-2 bg-light mw-100"
            aria-label="search"
            name="query"
            value={query} onChange={changeHandler}></FormControl>
            <Button variant="secondary" type="submit" className=''>Search</Button>
          </Form>
        </Container>
        </Navbar>
        <div>
          {movies.length > 0 ?(
            <div className="container">
            <div className='grid'>
              {movies.map((movieReq)=>
              <MovieBox key={movieReq.id} {...movieReq}/>)}
            </div>
          </div>
          ):(
            <h2>Sorry !! No movies found.</h2>
          )}

        </div>

    </>

  );
}

// App.listen(process.env.PORT || 3000, () => {
//   console.log("server");
// });

export default App;
