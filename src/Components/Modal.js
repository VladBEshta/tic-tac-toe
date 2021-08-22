import React from 'react'
import { useFormik } from 'formik'
import * as Yup from "yup"

export default function Modal({ active, setActive, setNames }) {

    const initialValues = {
        firstName: '',
        secondName: ''
    }

    const onSubmit = values => {
        setNames([values.firstName, values.secondName])
        setActive(false)
    }
    const validationSchema = Yup.object({
        firstName: Yup
            .string()
            .required('Required')
            .min(2, 'At least 2 symbols')
            .max(20, 'Max. 20 symbols'),
        secondName: Yup
            .string()
            .required('Required')
            .required('Required')
            .min(2, 'At least 2 symbols')
            .max(20, 'Max. 20 symbols'),
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })
    return (
        <div className={active ? 'modal' : 'modal deactive'}>
            <form className="modal-form" onSubmit={formik.handleSubmit}>
                <label htmlFor="firstName">First champion:</label>
                <input
                    id='firstName'
                    name='firstName'
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />
                {formik.touched.firstName && formik.errors.firstName ? <p className='formik-error'>{formik.errors.firstName}</p> : null}
                <label htmlFor="secondName">Second champion:</label>
                <input
                    id='secondName'
                    name='secondName'
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.secondName} />
                {formik.touched.secondName && formik.errors.secondName ? <p className='formik-error'>{formik.errors.secondName}</p> : null}
                <button type='submit'>Save</button>
            </form>
        </div>
    )
}
