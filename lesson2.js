use BookShopDB
show  dbs
db.createCollection('sites')
db.sites.insert({name:'atar1',url:'link1',arrCodes:[]})
db.sites.insert({name:'atar2',url:'link2',arrCodes:[]})
db.sites.insert({name:'atar3',url:'link3',arrCodes:[]})

db.createCollection('books')
db.books.insert({name:"aaa",short_desc:"bbb",imgUrl:"ccc",bookUrl:"ddd",ISBN:"eee",price:30.9,ctegories:['ff','gg','hh'],siteId:'67053d766412106a9e072f8a'})
db.books.insert({name:"iii",short_desc:"jjj",imgUrl:"kkk",bookUrl:"lll",ISBN:"mmm",price:40.9,ctegories:['nn','oo','pp'],siteId:'67053d836412106a9e072f8e'})
db.books.insert({name:"qqq",short_desc:"rrr",imgUrl:"sss",bookUrl:"ttt",ISBN:"uuu",price:50.9,ctegories:['vv','ww','xx'],siteId:'67053eed6412106a9e072f92'})

show collections

db.sites.drop() 
