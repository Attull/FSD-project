import { Router } from "express";
import { getStudentController, postStudentController } from "../Controllers/studentController.js";


const route = Router()


route.get('/student',getStudentController)

route.post('/student', postStudentController )

export default route
