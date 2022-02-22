var mongoose =require("mongoose");

var Schema=mongoose.Schema;

var Contact=new Schema(
{
FullName:String,
Phone:Number


}

)

const ContactSchema =mongoose.model("Contact",Contact)
module.exports=ContactSchema;