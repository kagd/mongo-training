var collection = database.GetCollection<Account>("accounts");
var filter = Builders<Account>.Filter.Lt(x => x.Balance, 100);
var update = Builders<Account>.Update.Push(x => x.Tags, "At Risk");
var result = await collection.UpdateManyAsync(filter, update);