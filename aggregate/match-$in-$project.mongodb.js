use("sample_mflix");

db.movies.aggregate([
  {
    $match: {
      genres: {
        $in: ["Drama", "Comedy"],
      },
    },
  },
  {
    $project: {
      awards: {
        wins: 1,
      },
    },
  },
]);
