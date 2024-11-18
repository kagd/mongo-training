var collection = database.GetCollection<Account>("accounts");
var filter = Builders<Account>.Filter.Gte(x => x.Released, new DateTime(2016, 1, 1));
var aggregate = collection.Aggregate()
    .Match(filter)
    .Group(x => x.Year,
    g => new
    {
      Year = g.Key,
      Count = g.Sum(x => 1)
    })
    .SortByDescending(x => x.Count);

var result = aggregate.ToList();
