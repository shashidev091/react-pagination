import './App.css';
import {useFormik} from 'formik';
import {useState} from "react";
import {Alert} from "react-bootstrap";

function App() {
    const [formDetails, setFormDetails] = useState({});
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => handleSubmit(values)
    });

    const handleSubmit = values => {
        setFormDetails({...values});
    }

    return (
        <div className="App" style={{ backgroundImage: "linear-gradient(to right, #b3ffab, #12fff7)", height: "100vh"}}>
            <div className={'d-flex justify-content-center'}>
                <form className={'d-flex flex-column p-3'} onSubmit={formik.handleSubmit}>
                    <label htmlFor="fName">First name</label>
                    <input type="text" id={'fName'} className={'form-control'} name="firstName" onChange={formik.handleChange} value={formik.values.firstName} />
                    <label htmlFor="lName">Last Name</label>
                    <input type="text" id={'lName'} name={"lastName"} className={'form-control'} onChange={formik.handleChange} value={formik.values.lastName} />
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name={"email"} className={'form-control'} onChange={formik.handleChange} value={formik.values.email} />
                    <button className={'btn btn-primary m-2'} type={'submit'}>Submit</button>
                </form>
            </div>
            <Alert className={'d-flex'} variant={'secondary'}>
                <label htmlFor={'firstname'}>First name : </label>
                <p id={'firstname'}>{formDetails && formDetails.firstName}</p>
            </Alert>
        </div>
    );
}

export default App;
