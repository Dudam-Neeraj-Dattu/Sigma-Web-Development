use('crudDb');

db.courses.updateOne({price: 0}, {$set: {price: 100}});
db.courses.updateMany({price: 0}, {$set: {price: 1000}});


