// pages/login.js
"use client" 
import Image from 'next/image';
import logo from '../../public/assets/Header-2.png'; // Replace with the path to your coat of arms image
import { useRouter } from 'next/navigation'; // Import the useRouter hook

export default function Login() {
  const navigation = useRouter(); // Initialize the useRouter hook

  const handleSignIn = (e) => {
    e.preventDefault();
    // Navigate to the '/home' route
    navigation.push('/home');
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-200">
      <div className="flex flex-1 items-center justify-center p-8">
        {/* Branding side */}

        <div className="max-w-md ">
          <Image src={logo} alt="Coat of Arms" width={800} height={800} />
          {/* <h2 className="mt-2 text-4xl font-bold text-blue-600">Project Management System</h2> */}
          {/* <p className="mt-2 text-red-600">NAKURU COUNTY</p>
          <p className="text-lg text-blue-800">COUNTY OF UNLIMITED OPPORTUNITIES</p> */}
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center p-2">
        {/* Login form side */}
        <div className="w-full max-w-md">
          <div className="bg-gray-100 shadow-lg rounded-lg p-8">
            <h2 className="text-xl font-bold text-center text-gray-700">Welcome!</h2>
            <p className="text-center text-gray-500">Please sign-in to your account</p>

            <form className="mt-8 space-y-6" action="#" method="POST" onSubmit={handleSignIn}>
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required
                       className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Email"/>
              </div>
              {/* Password Input */}
              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <input id="password" name="password" type="password" autoComplete="current-password" required
                       className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                       placeholder="Password"/>
              </div>
              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input id="remember_me" name="remember_me" type="checkbox"
                         className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                  <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                    Remember Me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot Password?
                  </a>
                </div>
              </div>
              {/* Submit Button */}
              <div>
                <button type="submit"
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
