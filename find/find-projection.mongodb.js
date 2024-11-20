use("sample_mflix");

db.movies.find(
  {
    languages: "English",
  },
  {
    title: 1,
    languages: 1,
    _id: 0,
  }
);
