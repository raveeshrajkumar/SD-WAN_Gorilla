import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSignup = () => {
    // Add your signup logic here, for example:
    // Assuming you have a function to update the database with the user's information
    // updateUserDatabase(name, username, password);

    // Set success to true after signup
    setSuccess(true);
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignup}>Sign Up</button>
      {success && <p>Signup successful. You can now login.</p>}
    </div>
  );
};

export default Signup;
