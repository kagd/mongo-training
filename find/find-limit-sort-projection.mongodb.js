use("sample_mflix");

db.movies.findOne();

use("sample_mflix");
db.movies
  .find({
    released: {
      $gte: new Date("2012-01-01T00:00:00Z"),
      $lte: new Date("2014-01-01T00:00:00Z"),
    },
  })
  .sort({
    released: -1,
    title: 1,
  })
  .limit(10)
  .projection({ title: 1, released: 1, _id: 0 });
