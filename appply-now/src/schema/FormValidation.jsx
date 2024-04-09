import { useContext } from 'react';
import * as yup from 'yup';



/*   //FDRMIK STARTED
  const initialValues = {
    personalDetails: {
        name: '',
        email: '',
        contactNumber: '',
        gender: '',
        city: '',
        state: '',
        zipCode: '',
        DOB: ''
    },
    
    cadidateCategory:'',
    experienced:[{ orgName: '', startDate: '', endDate: '', position: '' }],
    personalSkills: {
        field: '',
        skills: []
    },
    selfDescription: '',
    status: {
        personalDetails: { isValidationFired: 0, pointer: true },
        workExperience: { isValidationFired: 0, pointer: false },
        personalSkills: { isValidationFired: 0, pointer: false },
        selfDescription: { isValidationFired: 0, pointer: false },
    },
    isFormSubmitted: false,
    selectedField: '',
    selectedSkills: [],
  
} */

/* const experienceSchema =  yup.object().shape({
                    orgName:yup.string().required('Organization Required'),
                    startDate:yup.string().required('startDate Required'),
                    endDate:yup.string().required('endDate Required'),
                    position:yup.string().required('position Required'),
            }); */

// phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid')

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const FormValidation = [];

FormValidation[0] = yup.object().shape({

    personalDetails: yup.object().shape({
        name: yup.string().required().label('name'),



        email: yup.string().email().required("Email Required"),
        contactNumber: yup.string().matches(phoneRegExp, "Phone Number is not Valid").min(10, "Phone Number is not Valid").max(10, "Phone Number is not Valid"),
        gender: yup.string().required("gender Required"),
        DOB: yup.string().required('Date Required')
    })
})
FormValidation[1] = yup.object().shape({
    cadidateCategory: yup.string().required("Please Choose Either Experienced or Fresher"),
    experienced: yup.array().when('cadidateCategory', {
        is: (cadidateCategory) => cadidateCategory === 'Experienced',
        then: () => yup.array().of(
            yup.object().shape({
                orgName: yup.string().required('Organization Required'),
                startDate: yup.string().required('startDate Required'),
                endDate: yup.string().required('endDate Required'),
                position: yup.string().required('position Required'),
            })),

    }),
})

FormValidation[2] = yup.object().shape({
    personalSkills: yup.object().shape({
        field: yup.string().required("Required"),
        // skills: yup.array().min(1, "Minimum 1 Skill Required").required("Minimum 1 Skill Required")
        skills: yup.array().when('field', {
            is: (field) => (field != undefined) && (field != 'Finance'),
            then: () => yup.array().min(1, "Minimum 1 Skill Required").required("Minimum 1 Skill Required")
        })
    }, ['skills', 'personalSkills']),
})

FormValidation[3] = yup.object().shape({
    selfDescription: yup.string().required('Required')
})

export default FormValidation
