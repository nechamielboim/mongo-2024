db.books.find({})
db.books.find({categories:{$size:0}})
//8
db.books.find({authors:{$all:["Robi Sen"]}},{title:1,longDescription:1})
//9
db.books.find({authors:{$all:[/a/i]}},{title:1,longDescription:1})
//10
db.books.find({categories:['XML','Internet']})
//11
db.books.find({categories:{$all:['XML','Internet']}})
//12
db.books.find({authors:{$all:[""]}})
//13
db.books.find({"authors.2":""})
//14
db.books.find({_id:{$type:"ObjectId"}})
