import "../stylesheets/excerciseform.css"

import React, { useReducer } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import formReducer, { initialState } from "../reducer/formReducer";

export default function ExcerciseForm (){


    const [state, dispatch ] = useReducer(formReducer, initialState)
    return(
        <div className='container'>
            <h1 className="header">Excercise Tracker</h1>
            <div className='form-container'>
        <Formik initialValues={state.excerciseDetails} onSubmit={async (values) => {
        await new Promise((r) => setTimeout(r, 500));
        console.log(JSON.stringify(values, null, 2));
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