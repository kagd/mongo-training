// https://learn.mongodb.com/learn/course/mongodb-indexes/lesson-5-deleting-mongodb-indexes/learn?client=customer&page=2

use("sample_mflix");

db.users.dropIndex("email_1");

// db.customers.dropIndexes()
