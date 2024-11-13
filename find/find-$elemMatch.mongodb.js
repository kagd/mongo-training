use("sample_mflix");
db.movies
  .find({
    writers: {
      $elemMatch: {
        $eq: "Ethan Coen",
      },
    },
  })
  .projection({
    _id: 0,
    title: 1,
    writers: 1,
  });

use("sample_mflix");
db.movies
  .find({
    writers: {
      $in: ["Ethan Coen"],
    },
  })
  .projection({
    _id: 0,
    title: 1,
    writers: 1,
  });

use("sample_mflix");
db.movies
  .find({
    writers: "Ethan Coen",
  })
  .projection({
    _id: 0,
    title: 1,
    writers: 1,
  });
