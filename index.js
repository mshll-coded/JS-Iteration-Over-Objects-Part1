/******************************
	Q1) Create an object called person with properties name, age, and city.
 Set appropriate values for these properties.
********************************/
// Meshal
const person = {
  name: 'John Doe',
  age: 99,
  city: 'Portland',
};

/******************************
	Q2) Add a new key email to the person object and assign it an email address.
********************************/
// Yousef
person.email = 'john@gmail.com';

/******************************
	Q3) Write a JavaScript function called hasKey that takes two arguments:
 an object and a key. The function should return true if the object contains
 the specified key, and false otherwise. For example, if the object is
 { name: 'John', age: 25 }, and the key is 'name', the function should return true,
 but if the key is 'city', it should return false.
********************************/
// M
const hasKey = (obj, key) => obj.hasOwnProperty(key);

const movies = [
  {
    title: 'The Shawshank Redemption',
    director: 'Frank Darabont',
    year: 1994,
    genre: 'Drama',
  },
  {
    title: 'The Godfather',
    director: 'Francis Ford Coppola',
    year: 1972,
    genre: 'Crime',
  },
  {
    title: 'Pulp Fiction',
    director: 'Quentin Tarantino',
    year: 1994,
    genre: 'Crime',
  },
  {
    title: 'The Dark Knight',
    director: 'Christopher Nolan',
    year: 2008,
    genre: 'Action',
  },
  {
    title: 'Forrest Gump',
    director: 'Robert Zemeckis',
    year: 1994,
    genre: 'Drama',
  },
];

/******************************
	Q4) Create a function that accepts an array of objects called 'movies'
and iterates through it to print the titles of all the movies.
********************************/
// Y
const printMovies = (movies) => movies.forEach((movie) => console.log(movie.title));

/******************************
	Q5) Create a function that accepts an array of objects called 'movies'
and iterates through it to count how many movies were released in the year 1994.
********************************/
// M
const moviesIn1994 = (movies) => movies.filter((movie) => movie.year === 1994).length;

/******************************
	Q6) Write a function that updates the genre of the movie "The Dark Knight"
 to "Action/Drama" and returns the modified array of movies.
********************************/

// Y

const changeGenreSimple = (movies) =>
  movies.map((movie) => {
    if (movie.title === 'The Dark Knight') {
      movie.genre = 'Action/Drama';
    }
    return movie;
  });

// Y AND M
const changeGenre = (movies) =>
  movies.map((movie) => {
    movie.title === 'The Dark Knight' ? (movie.genre = 'Action/Drama') : null;
    return movie;
  });
