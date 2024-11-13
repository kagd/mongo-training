use("sample_mflix");
// db.users.findOne();

db.users.insertMany([
  {
    name: "Alice",
    email: "alice@foo.com",
    password: "password123",
    createdAt: new Date(),
  },
  {
    name: "Bob",
    email: "something@example.xom",
    password: "password456",
    createdAt: new Date(),
  },
]);
