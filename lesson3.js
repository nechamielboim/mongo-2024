////2
//db.books.find()
////3
//db.books.find({ISBN:'1933988797'})
////4
//db.books.find({name:/java/},{name})
////5
//db.books.find({status:'PUBLISH'},{name,date,_id})
////6
//db.books.find({price:{$gt:100}},{name,numPages,ISBN})
////7
//db.books.find({name:/c#/})
////8
//db.books.find({name:/^a/})
////9
//db.books.find({numPages:[10-100]},{name,numPages})
////10
//db.books.find({name:/r/})
////12
//db.books.find({name:/^e/},{name,_id})
//11
use catalog
db.books.find({title:/data/i})
//13
db.books.find().sort({title:1})
//14
db.books.find().sort({title:-1})
//15
db.books.countDocuments({title:/^j/i})
//16
db.books.find().sort({pageCount:-1}).limit(5)
//17
db.books.find({categories:{$exists:false}})
//18
db.books.find({shortDescription:{$exists:true}})
//19
db.books.find({id:{$type:ObjectId}}).count()
    
    
    



































































































































