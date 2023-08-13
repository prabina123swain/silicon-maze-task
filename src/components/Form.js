import "./form.css";
import { useState } from "react";

export default function Form() {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [Password, setPassword] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const validateForm = () => {
         // Reset error message before validation
         setErrorMessage("");

         // Validation Conditions
         if (!/^[A-Z][a-z]*$/.test(FirstName)) {
             setErrorMessage("Invalid first name");
         } else if (!/^[A-Z][a-z]*$/.test(LastName)) {
             setErrorMessage("Invalid last name");
         } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}/.test(Password)) {
             setErrorMessage("Invalid password");
         } else if (!/^[A-Za-z0-9+_.-]+@([A-Za-z0-9]+\.)+[A-Za-z]{2,}$/.test(EmailId)) {
             setErrorMessage("Invalid email address");
         }
    };


    return (
        <main>
            <div className="form">
                {errorMessage && <div className="error">{errorMessage}</div>}
                <div className="inputContainer">
                    <label htmlFor="fname">First name:</label>
                    <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="input"
                        value={FirstName}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="lname">Last name:</label>
                    <input
                        type="text"
                        id="lname"
                        name="lname"
                        className="input"
                        value={LastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="input"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="inputContainer">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="text"
                        id="email"
                        name="email"
                        className="input"
                        value={EmailId}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </div>
                <button className="button" onClick={validateForm}>
                    Submit
                </button>
            </div>
        </main>
    );
}
