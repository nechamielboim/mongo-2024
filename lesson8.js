db.getCollection("books").find()
//1
db.books.distinct("title",{}).map(t=>t.toUpperCase())

//2
db.books.distinct("categories",{}).map(c=>
    {
        const co= db.books.countDocuments({categories:c})
        return c+": "+co  
    }    
)

//3
db.books.aggregate([
{$match:{status:"PUBLISH"}},
{$project:{status:false}},
{$set:{IsPublished:true}}
])
