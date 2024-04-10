import { useContext } from 'react';
import * as yup from 'yup';


const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const FormValidation = [

    yup.object().shape({

        personalDetails: yup.object().shape({
            name: yup.string().required().label('name'),



            email: yup.string().email().required("Email Required").label('email'),
            contactNumber: yup.string().matches(phoneRegExp, "Phone Number is not Valid").min(10, "Phone Number is not Valid").max(10, "Phone Number is not Valid").required().label('contactNumber'),
            gender: yup.string().required().label('gender'),
            DOB: yup.date().required().label('DOB')
        })
    }),
    yup.object().shape({
        cadidateCategory: yup.string().required("Please Choose Either Experienced or Fresher"),
        experienced: yup.array().when('cadidateCategory', {
            is: (cadidateCategory) => cadidateCategory === 'Experienced',
            then: () => yup.array().of(
                yup.object().shape({
                    orgName: yup.string().required('Organization Required'),
                    startDate: yup.string().required().label('startDate'),
                    endDate: yup.string().required().label('endDate'),
                    position: yup.string().required('position Required').label('position'),
                })),

        }),
    }),

    yup.object().shape({
        personalSkills: yup.object().shape({
            field: yup.object().required("Required"),
            // skills: yup.array().min(1, "Minimum 1 Skill Required").required("Minimum 1 Skill Required")
            skills: yup.array().when('field', {
                is: (field) => (field != undefined) && (field != 'Finance'),
                then: () => yup.array().min(1, "Minimum 1 Skill Required").required("Minimum 1 Skill Required")
            })
        }, ['skills', 'personalSkills']),
    }),

    yup.object().shape({
        selfDescription: yup.string().required('Required')
    })
]
export default FormValidation
