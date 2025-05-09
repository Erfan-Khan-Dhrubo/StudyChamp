// import React from "react";

// const AdminLogin = () => {
//   return (
//     <div>
//       <div class="flex justify-center items-center min-h-screen bg-gray-100">
//         <div class="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 class="text-2xl font-bold text-center mb-4">Admin Login</h2>

//           <form>
//             <div class="mb-4">
//               <label class="block text-gray-700 text-sm font-bold mb-2">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 class="input input-bordered w-full"
//               />
//             </div>

//             <div class="mb-4">
//               <label class="block text-gray-700 text-sm font-bold mb-2">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 placeholder="Password"
//                 class="input input-bordered w-full"
//               />
//             </div>

//             <button class="btn text-white w-full bg-black ">Signup</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      // Save admin login flag in session storage
      sessionStorage.setItem("isAdmin", "true");
      alert("Login successful!");
      navigate("/courses"); // Redirect to courses
    } else {
      alert("Incorrect username or password!");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4">Admin Login</h2>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              type="text"
              className="input input-bordered w-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="input input-bordered w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="btn text-white w-full bg-black">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;

