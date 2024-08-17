db.person.aggregate([
    { $group: { _id: "$company.location.country", avgAge: { $avg: "$age" } } },
    { $sort: { _id: 1 } }
]);
