import Hero from '../hero/Hero';

const Home = ({ movies }) => {
  return (
    // Render the Hero component with movies as a prop
    <Hero movies={movies} />
  )
}

export default Home;
