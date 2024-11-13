use("sample_mflix");
db.users.find({ name: "Grant Klinsing" });

db.users.updateMany(
  {
    name: "Blake Klinsing",
  },
  {
    $set: {
      email: "bklinsing@duck.com",
    },
  },
  {
    upsert: true,
  }
);
