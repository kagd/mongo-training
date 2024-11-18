use("sample_mflix");
db.users.explain().find();

use("sample_mflix");
db.users.explain().find({
  email: "gklinsing@duck.com",
});
