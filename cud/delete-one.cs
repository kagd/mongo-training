var collection = Builders<Account>.Filter.Eq(x => x.Id, 1);
var account = Builders<Account>.Filter.Eq(x => x.Id, 1);
var result = await collection.DeleteOneAsync(account);