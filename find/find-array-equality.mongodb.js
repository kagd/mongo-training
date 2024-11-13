use("sample_mflix");

db.movies.find({
  languages: "English",
});

use("sample_mflix");
db.movies.find({
  languages: {
    $in: ["English"],
  },
});
