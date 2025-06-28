import  React, { useEffect, useState }  from 'react'

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Load users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Optional: prevent duplicate emails
    const isEmailExist = storedUsers.some(
      (user) => user.email === form.email
    );
    if (isEmailExist) {
      setMessage("Email already registered!");
      return;
    }

    // Save new user
    storedUsers.push(form);
    localStorage.setItem("users", JSON.stringify(storedUsers));

    setMessage("Registration successful!");
    setForm({ name: "", email: "", password: "" });
    setTimeout(() => {
      window.location.href = "/"; // redirect after a short delay
    }, 1000);

  };
  
    return (
        <div className="min-h-screen max-w-screen flex items-center justify-center bg-gray-900">
        <div className="bg-white rounded-lg shadow-lg px-6 py-12 w-full max-w-sm">
          <div className="text-center">
            {/* <img className="mx-auto h-10 w-auto" src="/logo.png" alt="Your Company" /> */}
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Registration</h2>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleRegister} method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={form.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div>
              <label htmlFor="password_confirm" className="block text-sm font-medium text-gray-700">
                Password Confirmation
              </label>
              <input
                id="password_confirm"
                name="password_confirm"
                type="password"
                value={form.password_confirm || ""}
                onChange={handleChange}
                autoComplete="current-password_confirm"
                required
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-black"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Save
              </button>
            </div>
          </form>
        </div>
        {/* {message && <p>{message}</p>} */}
      </div>
    )
}

export default Register;