import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState( false );
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password, confirmPassword};
        console.log("Welcome", newUser);
        setHasBeenSubmitted( true );
    };

    const formMessage = () => {
        if ( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    }

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 2) {
            setFirstNameError("First name must be at least 2 characters");
        } else {
            setFirstNameError("");
        }
    }
    
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 2) {
            setLastNameError("Last name must be at least 2 characters")
        } else {
            setLastNameError("");
        }
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 5) {
            setEmailError("Email must be at least 5 characters")
        } else {
            setEmailError("");
        }
    }

    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8) {
            setPasswordError("Password must be at least 8 characters")
        } else {
            setPasswordError("");
        }
    }

    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password) {
            setConfirmPasswordError("Passwords must match!")
        } else {
            setConfirmPasswordError("")
        }
    }


    return(
        <div className="bg-dark h-100 text-light">

            <form className="col-6 mx-auto my-5" onSubmit={ createUser }>
                {
                    hasBeenSubmitted?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome, please submit the form.</h3>
                }

                <div className="form-group">
                    <label>First Name: </label> 
                    <input type="text" name="firstName" className="form-control" onChange={ handleFirstName } />
                    {
                        firstNameError ?
                        <p className="text-danger">{ firstNameError }</p> :
                        ''
                    }
                </div>

                <div className="form-group">
                    <label>Last Name: </label> 
                    <input type="text" name="lastName" className="form-control" onChange={ handleLastName } />
                    {
                        lastNameError ?
                        <p className="text-danger">{ lastNameError }</p> :
                        ''
                    }
                </div>

                <div className="form-group">
                    <label>Email: </label>
                    <input type="text" name="email" className="form-control" onChange={ handleEmail } />
                    {
                        emailError ?
                        <p className="text-danger">{ emailError }</p> :
                        ''
                    }
                </div>

                <div className="form-group">
                    <label>Password: </label>
                    <input type="password" name="password" className="form-control" onChange={ handlePassword } />
                    {
                        passwordError ?
                        <p className="text-danger">{ passwordError }</p> :
                        ''
                    }
                </div>

                <div className="form-group">
                    <label>Confirm Password: </label>
                    <input type="password" name="confirmPassword" className="form-control" onChange={ handleConfirmPassword } />
                    {
                        confirmPasswordError ?
                        <p className="text-danger">{ confirmPasswordError }</p> :
                        ''
                    }

                </div>

                <input className="btn btn-primary" type="submit" value="Create User"/>
            </form>

            <div className="col-5 mx-auto">
                <h4 className="card-title">{firstName} {lastName}</h4>
                <p className="card-body">Email: {email}</p>
                <p className="card-body">Password: {password}</p>
                <p className="card-body">Confirm Password: {confirmPassword}</p>
            </div>
        </div>

    );
};
    
export default UserForm;