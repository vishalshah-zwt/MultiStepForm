import * as yup from 'yup';

const ExperimentSchema = yup.object().shape({
    name:yup.string().required("Required")
})

export default ExperimentSchema