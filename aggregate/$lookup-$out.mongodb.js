use("datamgmt");

db.orders.aggregate([
  {
    $lookup: {
      from: "inventory",
      localField: "item",
      foreignField: "sku",
      as: "inventory_docs",
    },
  },
  {
    $match: {
      "inventory_docs.sku": { $ne: null },
    },
  },
  {
    $group: {
      _id: "$item",
    },
  },
  {
    $sort: {
      _id: -1,
    },
  },
  {
    $out: "orders_inventory",
  },
]);
