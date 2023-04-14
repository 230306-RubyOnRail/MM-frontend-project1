import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="">Dashboard</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/createuser">CreateUser</Link></li>
                <li><Link to="/show">ShowReimbursements</Link></li>
                <li><Link to="/submit">SubmitReimbursements</Link></li>
                <li><Link to="/update">UpdateReimbursements</Link></li>
                <li><Link to="/delete">DeleteReimbursements</Link></li>
            </ul>
        </nav>
    );
}