const musicSchema = require('../schema/schema');

exports.postController=async(req,res,next)=>{
  try{
  const music = await musicSchema.create(req.body);
  res.json(music);
  }catch(error){
    res.json(error);
  }
}

exports.getController=async(req,res,next)=>{
  try{
  const music = await musicSchema.find();
  res.json(music); 
}catch(error){
  console.log(error);
}
}

exports.getOneController=async(req,res,next)=>{
  try{
    const music = await musicSchema.findById(req.params.id);
    res.json(music);
  }
  catch(error){
    res.json(error);
  }
}
