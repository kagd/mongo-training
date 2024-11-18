var collection = database.GetCollection<Account>("accounts");
var account = new Accounts { Id = 1, Balance = 100 };
await collection.InsertOneAsync(account);