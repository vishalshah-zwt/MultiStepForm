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

const experienceSchema =  yup.object().shape({
                    orgName:yup.string().required('Organization Required'),
                    startDate:yup.string().required('startDate Required'),
                    endDate:yup.string().required('endDate Required'),
                    position:yup.string().required('position Required'),
            });
        
const FormValidation = yup.object().shape({
    
    personalDetails: yup.object().shape({
        name:yup.string().required("Name Required"),
        email:yup.string().email().required("Email Required"),
        contactNumber:yup.string().required("Contact Number Required"),
        gender:yup.string().required("gender Required"),
        DOB:yup.string().required('Date Required')
    }),


   
    cadidateCategory :yup.string().required("Please Choose Either Experienced or Fresher"),
    
 /*    experienced:yup.array().of(
        yup.object().shape({
            orgName:yup.string().required('Organization Required'),
            startDate:yup.string().required('startDate Required'),
            endDate:yup.string().required('endDate Required'),
            position:yup.string().required('position Required'),
        })
    ), */

    experienced:yup.array().when('cadidateCategory',{
        is:(cadidateCategory) => cadidateCategory === 'Experienced',
        then:() => yup.array().of(
            yup.object().shape({
                orgName:yup.string().required('Organization Required'),
                startDate:yup.string().required('startDate Required'),
                endDate:yup.string().required('endDate Required'),
                position:yup.string().required('position Required'),
            })),
            
    }),
    personalSkills: yup.object().shape({
        field:yup.string().required("Required"),
        skills:yup.array().min(1,"Minimum 1 Skill Required"). required("Minimum 1 Skill Required")
    }),
    selfDescription: yup.string().required('Required')


})

export default FormValidation
