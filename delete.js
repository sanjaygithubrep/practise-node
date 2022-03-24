const dbConnect = require('./connection');
const deleteData = async()=>{
    let data= await dbConnect();
    let result= await data.deleteMany({name:'nord'})
    console.log(result);
    if(result.acknowledged)
    {
        console.log("record deleted")
    }
}
deleteData();