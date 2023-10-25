import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';

function App() {
  // State variables for managing data
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  // Function to fetch a list of movies from the API
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Function to fetch details of a specific movie by ID
  const getMovieData = async (movieId) => {
    try {
      const response = await api.get(`/api/v1/movies/${movieId}`);
      const singleMovie = response.data;
      setMovie(singleMovie);
      setReviews(singleMovie.reviewIds);
    } catch (error) {
      console.error(error);
    }
  }

  // Fetch movies when the component mounts
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />

      {/* Define application routes using React Router */}
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Route for the home page with a list of movies */}
          <Route path="/" element={<Home movies={movies} />} ></Route>

          {/* Route for displaying a movie trailer */}
          <Route path="/Trailer/:ytTrailerId" element={<Trailer />} ></Route>

          {/* Route for displaying movie reviews */}
          <Route path="/Reviews/:movieId" element={
            <Reviews
              getMovieData={getMovieData}
              movie={movie}
              reviews={reviews}
              setReviews={setReviews}
            />
          }></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
