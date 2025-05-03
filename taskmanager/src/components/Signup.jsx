// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function Signup() {
//   const [username, setUsername] = useState(""); // state for username
//   const [password, setPassword] = useState(""); // state for password
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:5000/api/signup", {
//         username,
//         password,
//       });

//       if (res.data.success) {
//         navigate("/login"); // redirect to login page after successful signup
//       }
//     } catch (err) {
//       console.error("Signup error", err);
//       setError("Something went wrong during signup. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
//       <form onSubmit={handleSignup}>
//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//             Username
//           </label>
//           <input
//             id="username"
//             type="text"
//             value={username} // bind to state
//             onChange={(e) => setUsername(e.target.value)} // update state on change
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//             Password
//           </label>
//           <input
//             id="password"
//             type="password"
//             value={password} // bind to state
//             onChange={(e) => setPassword(e.target.value)} // update state on change
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>

//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">
//           Sign Up
//         </button>
//       </form>

//       {error && <p className="text-red-500 mt-2">{error}</p>}
//     </div>
//   );
// }

// export default Signup;
