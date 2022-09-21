import { useState } from "react";
import ReactDOM from 'react-dom/client';
import './Form.css'

function MyForm() {
    const [email, setEmail] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`PLEASE PROVIDE A VALID EMAIL: ${email}`);
    }

    return (
        <form >
            <label>
                <input
                    type="text"
                    value={email}
                    placeholder="        Email Address   "
                    onChange={(e) => setEmail(e.target.value)}
                />
                <img className="btn" src=" /images/icon-arrow.svg" alt="submit" onClick={handleSubmit} />
            </label>

        </form>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MyForm />);
export default MyForm
