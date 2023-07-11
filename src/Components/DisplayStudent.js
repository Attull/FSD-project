import axios from 'axios';
import React, { useDebugValue, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

var divStyle = {
    margin: '8% 8%',
};

export const DisplayStudent = () => {

    const [students, setStudents] = useState([])

    const getstudentList = () => {
        axios.get('http://localhost:5000/api/student')
            .then((response) => {
                console.log(response);
                setStudents(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:5000/api/student/${id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    useEffect(() => {
        getstudentList()
    }, [])
    return (
        <div>
            <div style={divStyle}>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            {/* <th>Password</th> */}
                            <th>Batch</th>
                            {/* <th></th>
                            <th></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            students && students.map((student, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{i}</td>
                                        <td>{student.name}</td>
                                        <td>{student.email}</td>

                                        <td>{student.batch}</td>
                                        {/* <td>
                                            <Link to={"editstudent/" + student._id} className="btn btn-primary">Edit</Link>
                                </td> */}
                                        <td>
                                            <button onClick={() => deleteStudent(student._id)} bsStyle="danger" >Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
