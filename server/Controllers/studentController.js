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
    const id =  req.params.id
    let studentId
    try{
        userModel.findByIdAndRemove(id)
            .then(data => {
                if(!data){
                    res.status(400).json({
                        message:`No data is there on the ID ${id}`
                    })
                }
            })
    }catch(e){
        console.log("inside")
    }

    res.status(200).json({
        message:"student deleted"
    })
}

export const updateStudentController = async (req, res) =>{
    const id =  req.params.id
    const {name,password, email, batch} = req.body

    let student
    try{
        console.log("first")
        student = await userModel.findByIdAndUpdate(id,{
            name,
            email,
            password,
            batch
        })
        console.log("last")
    }catch(e){

    }

    if(!student){
        res.status(400).json({
            message:"No used found"
        })
    }

    res.status(200).json({student})
    

}
