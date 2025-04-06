use('crudDb');

let a = db.courses.find({price: 0}).toArray();

console.log(a);
