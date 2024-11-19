use("sample_mflix");
db.movies.findOne();

use("sample_mflix");
db.movies
  .find({
    $or: [{ "imdb.rating": { $gt: 9 } }, { "awards.wins": { $gt: 1 } }],
  })
  .count();

use("sample_mflix");
db.movies
  .find({
    $and: [{ "imdb.rating": { $gt: 9 } }, { "awards.wins": { $gt: 1 } }],
  })
  .count();
