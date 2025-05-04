import React from "react";

const Signup = () => {
  return (
    <div>
      <div class="flex justify-center items-center min-h-screen bg-gray-100">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-bold text-center mb-4">Signup</h2>
          <p class="text-gray-600 text-center mb-6">
            Create a new account and click signup when you're done.
          </p>

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
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
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

            <button class="btn text-white w-full bg-black ">Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
