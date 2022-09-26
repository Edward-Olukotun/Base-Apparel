import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './Form.css'

function MyForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false)

    const submit = (event) => {
        event.preventDefault();
        setError(validation(email));
    }

    const validation = (email) => {
        const regex =
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!email || regex.test(email) === false) {
            return "Please provide a valid email";
        } return;
    }

    return (
        <form className='form' onSubmit={submit}>
            <input
                type="text"
                value={email}
                placeholder="        Email Address   "
                onChange={(e) => setEmail(e.target.value)}
            />
            {error && (
                <img
                    className="error-icon"
                    src="./images/icon-error.svg"
                    alt="error-icon"
                />
            )}
            <button type="submit">
                <img className="btn" src=" /images/icon-arrow.svg" alt="submit" />
            </button>
            <p className="error">{error}</p>

        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm
