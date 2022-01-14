// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {

  const newArr = arr.map((currentElement) => currentElement.director)
  return newArr
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  
  let directorSpielberg = arr.filter((currentElement) => {
    return currentElement.director === "Steven Spielberg"
  })

  let genreDrama = 0
    for (let i = 0; i < directorSpielberg.length; i++) {
      for (let j = 0; j < directorSpielberg[i].genre.length; j++)
        if (directorSpielberg[i].genre[j] === "Drama")
        genreDrama++
    }
    return genreDrama
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  if (arr.length === 0) {
    return 0;
  } else {

  let sum = arr.reduce((accumulator, currentElement) => {
    return accumulator + currentElement.score
  }, 0)

  return Math.round((sum / arr.length) * 100) / 100}  
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {

  let dramafilter = arr.filter((currentElement) => {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].genre.length; j++) {
        if (arr[i].genre[j] === "Drama")
        dramafilter++
      }
    }
  })
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {

  const newArr = arr.sort((a,b) => {
    return a.year - b.year;
  })


  return newArr; 

}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {

  const newArr = arr.sort((a,b) => {
    return a.title.localeCompare(b.title)
  })

  return newArr
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
