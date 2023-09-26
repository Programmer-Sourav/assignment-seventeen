import "../stylesheets/excerciseform.css"

import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Joi from 'joi';
import { initialState } from "../reducer/formReducer";

export default function ExcerciseForm (){


    const validationSchema = Joi.object({
        excerciseName: Joi.string().required,
        duration: Joi.number().required, 
        caloriesBurned: Joi.number().required
    })

    const handleSubmit = (values) =>{
        console.log("Form Data ", values)
    }

    const handleFieldChange = (e) =>{

    }
    return(
        <div className='container'>
            <h1 className="header">Excercise Tracker</h1>
            <div className='form-container'>
        <Formik initialValues={initialState} validationSchema={validationSchema} onSubmit={handleSubmit}>
            <Form> 
             <div className='form-group'> 
             <label htmlFor='excercise' className="textleft">Name of the Excercise</label>
             <Field type='text' id="excercise" name='excercise' placeholder='Excercise' onChange={handleFieldChange}/>
             <ErrorMessage name="excercise" component="div" className='error'/>
             </div> 
             <div className='form-group' >
             <label htmlFor='duration' className="textleft">Duration of the Excercise</label>  
             <Field type='number' id='duration' name='duration' placeholder='10 mins' onChange={handleFieldChange}/>
             <ErrorMessage name="duration" component="div" className='error'/>
             </div>
             <div className='form-group'>
             <label htmlFor='caloriesBurned' className="textleft">Calories Burned</label>  
             <Field type='number' id='caloriesBurned' name='caloriesBurned' placeholder='100 KCAL' onChange={handleFieldChange}/>
             <ErrorMessage name="caloriesBurned" component="div" className='error'/>
             </div>
             <button type="submit" className="basicbutton">Submit</button>
            </Form>
        </Formik>
        </div>
        </div>
    )
}