use("sample_mflix");
db.movies.aggregate([
  {
    $match: {
      released: {
        $gte: new Date("2012-01-01T00:00:00Z"),
        $lte: new Date("2014-01-01T00:00:00Z"),
      },
    },
  },
  {
    $group: {
      _id: "$year",
      count: { $sum: 1 },
    },
  },
  {
    $sort: {
      _id: -1,
    },
  },
]);
