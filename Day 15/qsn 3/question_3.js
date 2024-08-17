db.person.aggregate([
    { $group: { _id: { gender: "$gender", status: "$status" }, count: { $sum: 1 } } },
    { $group: { _id: "$_id.gender", counts: { $push: { status: "$_id.status", count: "$count" } } } }
]);
