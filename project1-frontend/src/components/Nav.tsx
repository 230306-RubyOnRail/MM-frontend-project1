import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/reimbursements">SubmitReimbursements</Link></li>
            </ul>
        </nav>
    );
}