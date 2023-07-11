import { Router } from "express";
import { deleteStudentController, getStudentController, postStudentController, updateStudentController } from "../Controllers/studentController.js";


const route = Router()

route.get('/student',getStudentController)
route.post('/student', postStudentController )
route.delete('/student/:email', deleteStudentController )
route.put('/student/:id', updateStudentController )

export default route
