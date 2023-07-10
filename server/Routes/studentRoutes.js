import { Router } from "express";
import { deleteStudentController, getStudentController, postStudentController } from "../Controllers/studentController.js";


const route = Router()


route.get('/student',getStudentController)
route.post('/student', postStudentController )
route.delete('/student/:email', deleteStudentController )

export default route
