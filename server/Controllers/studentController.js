import userModel from "../models/userModel.js";


export const getStudentController = async (req,res) =>{
    let students;
  try{
    students =  await userModel.find()
  }catch(e){
  }

  if(!students){
    res.status(400).json({
        message:"No data found"
    })
  }

  res.status(200).json(students)
}

export const postStudentController = async (req,res) =>{
    console.log(req.body)
    const {name, email, password, batch}  = req.body
    l
    let existingStudent;

    try{
        existingStudent = await userModel.findOne({email})
    }catch(err){
        console.log(err)
    }

    if(existingStudent){
        return res.status(400).json({
            message:"User is laready created"
        })
    }

    const newStudent = new userModel({
        name:name,
        email:email,
        password: password,
        batch:batch
    })

    try{
        await newStudent.save()
    }catch(err){

    }
    res.status(200).json({
        message:"new student created"
    })
}