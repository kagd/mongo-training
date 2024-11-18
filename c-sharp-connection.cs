using MongoDB.Driver;

var mongoURL = new MongoUrl("<your connection string>");
var client = new MongoClient(mongoURL);

var dbList = client.ListDatabases().ToList();

Console.WriteLine("The list of databases on this server is: ");
foreach (var db in dbList)
{
  Console.WriteLine(db);
}