use("sample_mflix");
db.users.find({ name: "Grant Klinsing" });

db.users.updateOne(
  {
    name: "Grant Klinsing",
  },
  {
    $set: {
      email: "gklinsing@gmail.com",
    },
  }
);
