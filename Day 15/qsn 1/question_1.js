db.sales.aggregate([
    { $group: { _id: "$productId", avgSales: { $avg: "$amount" } } },
    { $sort: { avgSales: -1 } },
    { $limit: 5 }
]);
