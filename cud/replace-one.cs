var collection = database.GetCollection<Account>("accounts");
var account = Builders<Account>.Filter.Eq(x => x.Id, 1);
var replacement = new Account { Id = 1, Balance = 100, Name = "Grant Klinsing" };
var result = await collection.ReplaceOneAsync(account, replacement);