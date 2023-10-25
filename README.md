# GoldenFilmHub: A Movie Information Web Application

Welcome to GoldenFilmHub, a web application that allows users to explore a curated collection of movies, watch trailers, and read reviews. The project demonstrates the integration of Spring Boot, MongoDB, Java, and React to create a feature-rich movie application.

## Key Features

- **Browse Movies:** Explore a wide selection of movies with details such as title, release year, and genre.
- **Watch Trailers:** Enjoy movie trailers directly within the application.
- **Read Reviews:** Access user-generated movie reviews to make informed viewing decisions.

## Technologies Used

- **Frontend:** React
- **Backend:** Spring Boot (Java)
- **Database:** MongoDB

## Prerequisites

Before getting started, ensure you have the following prerequisites installed on your system:

- Node.js and npm (for React)
- Java Development Kit (JDK)
- MongoDB

## Getting Started

Follow these steps to set up and run the GoldenFilmHub application on your local machine:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/goldenfilmhub.git
   cd goldenfilmhub

   ```

2. **Frontend Setup:**

   ```bash
   cd frontend
   npm install
   npm start
   ```

   This will start the React development server and you can access the application at `http://localhost:3000`.

3. **Backend Setup:**

   Open the project in your preferred Java IDE.

   - Configure MongoDB connection settings in `src/main/resources/application.properties`.

   - Build and run the Spring Boot application.

4. **Access the Application:**

   Open your web browser and navigate to `http://localhost:3000` to access GoldenFilmHub.

## API Endpoints

The backend exposes the following RESTful API endpoints:

- `GET /api/v1/movies`: Get a list of all movies.
- `GET /api/v1/movies/{id}`: Get details of a specific movie by ID.

Future Endpoints to be created:

- `GET /api/movies/search?query={searchQuery}`: Search for movies based on the provided query.
- `POST /api/movies`: Add a new movie.
- `PUT /api/movies/{id}`: Update details of a movie.
- `DELETE /api/movies/{id}`: Delete a movie.

## Future Features to Be Implemented

The GoldenFilmHub project has exciting future features planned to enhance the user experience and provide more functionalities. Here are some of the upcoming features:

- **Search Movies:** Implement movie search functionality based on criteria like title, genre, and release year. This feature will make it easier for users to find specific movies of interest.

- **User Registration:** Allow users to register accounts for personalized features. User registration will enable features such as saving favorite movies and submitting reviews.

- **User Reviews:** Enable users to write and submit reviews for movies. User-generated reviews will provide valuable insights and recommendations to other users.

- **Watch List:** Implement a feature for users to maintain a watchlist of movies they want to watch. Users can keep track of movies they plan to watch in the future.

Feel free to contribute or suggest improvements to the project! Your input is valuable in making GoldenFilmHub even better.

Enjoy exploring and discovering great movies with GoldenFilmHub!

