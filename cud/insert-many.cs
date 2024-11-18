var collection = database.GetCollection<Account>("accounts");
var accounts = new List<Account>
{
    new Account { Id = 1, Balance = 100 },
    new Account { Id = 2, Balance = 200 },
    new Account { Id = 3, Balance = 300 }
};
collection.InsertMany(accounts);