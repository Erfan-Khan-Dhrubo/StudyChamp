import React from "react";
import { Link } from "react-router";

const Login = () => {
  return (
    <div>
      <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-bold text-center mb-4">Login</h2>

          <form>
            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                class="input input-bordered w-full"
              />
            </div>

            <div class="mb-4">
              <label class="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                class="input input-bordered w-full"
              />
            </div>

            <button class="btn text-white w-full bg-black ">Login</button>
            <div className="flex mt-4">
              <p class="text-gray-600">Don't have an account?</p>
              <Link className="pl-4 text-blue-500 hover:underline" to="/signup">
                Signup
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
