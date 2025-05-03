// import React, { useState } from "react";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";

// function Login({ setIsLoggedIn }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Set loading to true while awaiting the request

//     try {
//       const res = await axios.post("http://localhost:5000/api/login", {
//         username,
//         password,
//       });

//       if (res.data.success) {
//         localStorage.setItem("isLoggedIn", "true");
//         setIsLoggedIn(true);
//         navigate("/tasks");
//       } else {
//         setError(res.data.message || "Invalid username or password");
//       }
//     } catch (err) {
//       console.error("Login error", err);
//       setError("Something went wrong. Please try again.");
//     } finally {
//       setLoading(false); // Set loading to false after the request completes
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Login</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//             Username
//           </label>
//           <input
//             id="username"
//             type="text"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
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
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded-md"
//             required
//           />
//         </div>

//         <button 
//           type="submit" 
//           className="w-full bg-blue-500 text-white py-2 rounded-md"
//           disabled={loading} // Disable button when loading
//         >
//           {loading ? "Logging in..." : "Login"}
//         </button>
//       </form>

//       {error && <p className="text-red-500 mt-2">{error}</p>}

//       <p className="mt-4 text-sm">
//         Don't have an account?{" "}
//         <Link to="/signup" className="text-blue-600 underline">
//           Sign up
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default Login;
