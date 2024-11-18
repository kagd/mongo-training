var collection = database.GetCollection<Account>("accounts");
var filter = Builders<Account>.Filter.Eq(x => x.Id == 1);
var update = Builders<Account>.Update.Set(x => x.Balance, 100);
var options = new UpdateOptions { IsUpsert = true };
var result = await collection.UpdateOneAsync(filter, update, options);