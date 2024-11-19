const pipeline = {
  $searchMeta: {
    index: "sample_supplies-sales-facets",
    facet: {
      operator: {
        text: {
          query: ["In store"],
          path: "purchaseMethod",
        },
      },
      facets: {
        locationFacet: {
          type: "string",
          path: "storeLocation",
        },
      },
    },
  },
};
db.sales.aggregate([pipeline]);
