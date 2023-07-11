import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { DisplayStudent } from './DisplayStudent';
import { AddStudent } from './AddStudent';
import { EditStudent } from './EditStudent';

export const Main = () => {
    return (
        <div>
            <Routes>
                <Route exact path='/' Component={DisplayStudent} />
                <Route path='/list' Component={DisplayStudent} />
                <Route path='/addstudent' Component={AddStudent} />
                <Route path='/editstudent/:id' Component={EditStudent} />
            </Routes>
        </div>
    )
}
