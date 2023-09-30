import "../stylesheets/excerciseform.css"

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { initialState } from "../reducer/formReducer";
import { useDispatch } from "react-redux";
import { addToExcercise } from "../actionCreators/actions";


export default function ExcerciseForm (){
   const dispatch = useDispatch()
    return(
        <div className='container'>
            <h1 className="header">Excercise Tracker</h1>
            <div className='form-container'>
        <Formik initialValues={initialState.excerciseDetails} onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        dispatch(addToExcercise(values))
        console.log(JSON.stringify(values));
      }}>
            <Form> 
             <div className='form-group'> 
             <label htmlFor='excercise' className="textleft">Name of the Excercise</label>
             <Field type='text' id="excercise" name="excerciseName" placeholder='Excercise' />
             <ErrorMessage name="excercise" component="div" className='error'/>
             </div> 
             <div className='form-group' >
             <label htmlFor='duration' className="textleft">Duration of the Excercise</label>  
             <Field type='number' id='duration' name='duration' placeholder='10 mins' />
             <ErrorMessage name="duration" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='caloriesBurned' className="textleft">Calories Burned</label>  
             <Field type='number' id='caloriesBurned' name='caloriesBurned' placeholder='100 KCAL' />
             <ErrorMessage name="caloriesBurned" component="div" className='error'/>
             </div>
             <button type="submit" className="basicbutton">Submit</button>
            </Form>
        </Formik>
        </div>
        </div>
    )
}