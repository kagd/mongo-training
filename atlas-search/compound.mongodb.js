const pipeline = [
  {
    $search: {
      index: "sample_supplies-sales-dynamic",
      compound: {
        filter: [
          {
            text: {
              query: "Online",
              path: "purchaseMethod",
            },
          },
        ],
        should: [
          {
            text: {
              query: "notepad",
              path: "items.name",
              score: { constant: { value: 5 } },
            },
          },
        ],
      },
    },
  },
  {
    $project: {
      "items.name": 1,
      purchaseMethod: 1,
      score: { $meta: "searchScore" },
    },
  },
];
db.sales.aggregate(pipeline);
