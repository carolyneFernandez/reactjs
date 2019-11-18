import films from './data/films.json';

/**
 * Fetch all films in the database.
 * @returns {array} An array containing all film objects.
 */
export function getAllFilms() {
  return films.map((f) => formatFilm(f));
};

/**
 * Fetch a film by its slug.
 * @param {string} slug
 * @returns {object|null} The film object or null if it was not found.
 */
export function getOneFilm(slug) {
  const res = films.filter((f) => f.slug === slug);

  if (!res[0]) return null;

  return formatFilm(res[0]);
};

/**
 * Fetch similar films and makes the json data readable by the App.
 * @param {object} film
 * @private
 */
function formatFilm(film) {
  let similarFilms = [];

  if (film.similars) {
    similarFilms = film.similars
      .map((slug) => formatSimilar(slug))
      .filter((sim) => sim !== null);
  }

  return {
    slug: film.slug,
    title: film.title,
    releaseYear: film.year,
    description: film.description,
    similarFilms: similarFilms
  };
}

/**
 * Find a film by its slug and make it readable by the App.
 * @param {string} slug
 * @private
 */
function formatSimilar(slug) {
  const res = films.filter((f) => f.slug === slug);

  if (!res[0]) return null;

  return {
    slug: res[0].slug,
    title: res[0].title,
    releaseYear: res[0].year
  };
}