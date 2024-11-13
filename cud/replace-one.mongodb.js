use("sample_mflix");
db.users.find({ name: "Grant Klinsing" });

db.users.replaceOne(
  {
    name: "Grant Klinsing",
  },
  {
    name: "Grant Klinsing",
    email: "gklinsing@duck.com",
  }
);
