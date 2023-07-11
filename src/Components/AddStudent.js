import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const customStyle = {
    width: '300px',
    margin: '0 auto'
}

export const AddStudent = () => {

    const navigate =  useNavigate()
    const [student, setStudent] = useState({
        name:'',
        email:'',
        password:'',
        batch:''
    })

    const handleChange = (e) =>{
        const obj = {...student,[e.target.name] : e.target.value}
        setStudent(obj)
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await axios.post('http://localhost:5000/api/student', student)
            .then((response) => {
              console.log(response);
                navigate('/')
            }).catch((err)=>{
                console.log("axios erro",err)
            })
    }
    return (
        <div className="container">
            <form style={customStyle} onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                        name="name"
                        type="text"
                        value={student.name}
                        onChange={handleChange}
                        className="form-control"
                    />
                </label>
                <br />
                <label>
                    Email
                    <input
                        name="email"
                        type="text"
                        value={student.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </label>
                <br />
                <label>
                    Password
                    <input
                        name="password"
                        type="password"
                        value={student.password}
                        onChange={handleChange}
                        className="form-control"
                    />
                </label>
                <br />
                <label>
                    Batch number
                    <input
                        name="batch"
                        type="number"
                        value={student.batch}
                        onChange={handleChange}
                        className="form-control"
                    />
                </label>
                <br />
                <input
                    type="submit"
                    value="submit"
                    className="btn btn-primary"
                />
            </form>
        </div>
    )
}
