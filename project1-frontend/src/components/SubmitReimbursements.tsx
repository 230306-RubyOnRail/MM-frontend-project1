import React, { useState } from 'react';
import { Reimbursement } from '../models/reimbursement';

import axios from 'axios';


const SubmitReimbursements: React.FC = () => {
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('');
  const [amount, setAmount] = useState(0);
  const [user_id, setUserId] = useState(0);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const reimbursement: Reimbursement = {
      description,
      status,
      amount,
      user_id,
    };
    try {
<<<<<<< HEAD:project1-frontend/src/components/SubmitReimbursement.tsx
      await axios.post('(PUT THE URL HERE)', reimbursement);
=======
      await axios.post('OUR URL HERE', reimbursement);
>>>>>>> main:project1-frontend/src/components/SubmitReimbursements.tsx
      // Handle successful submission here
    } catch (error) {
      // Handle error here
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Description:
        <input
          type="text"
          value={description}
          onChange={event => setDescription(event.target.value)}
        />
      </label>
      <br />
      <label>
        Status:
        <input
          type="text"
          value={status}
          onChange={event => setStatus(event.target.value)}
        />
      </label>
      <br />
      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={event => setAmount(Number(event.target.value))}
        />
      </label>
      <br />
      <label>
        User ID:
        <input
          type="number"
          value={user_id}
          onChange={event => setUserId(Number(event.target.value))}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmitReimbursements;