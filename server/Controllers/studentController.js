import userModel from "../models/userModel.js";
import bcrypt from "bcryptjs"

export const getStudentController = async (req,res) =>{
    let students;
  try{
    students =  await userModel.find({})
    
  }catch(e){
    console.log("mongoose error", e)
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

    const hashedPassword = bcrypt.hashSync(password);

    const newStudent = new userModel({
        name:name,
        email:email,
        password: hashedPassword,
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

export const deleteStudentController = async (req, res) =>{
    const email =  req.params.email
    let studentEmail
    try{
        studentEmail = await userModel.findOne({email})
    }catch(e){

    }

    if(!studentEmail){
        res.status(400).json({
            message:"No used found"
        })
    }

    try{
        await userModel.deleteOne({email})
    }catch(e){

    }

    res.status(200).json({
        message:"student deleted"
    })
}
