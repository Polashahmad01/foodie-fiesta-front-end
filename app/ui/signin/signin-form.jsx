import Link from "next/link";

export default function SignInForm() {
  return (
    <form className="bg-white px-6 py-6 rounded-lg border w-3/12">
      <h3 className="text-2xl font-bold opacity-50 mb-5">Sign In</h3>
      <div className="flex flex-col mb-3">
        <label htmlFor="email" className="mb-1 opacity-60">Email</label>
        <input className="bg-[#F9FAFB] border p-2 rounded-md" type="email" id="email" />
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="password" className="mb-1 opacity-60">Password</label>
        <input className="bg-[#F9FAFB] border p-2 rounded-md" type="password" id="password" />
      </div>
      <div className="flex justify-end opacity-60 mb-4">
        <Link
          href="/reset-password"
        >
          Forgot password?
        </Link>
      </div>
      <div className="flex mb-3">
        <button className="w-full bg-[#F9FAFB] opacity-60 py-2 border rounded-md">Sign In</button>
      </div>
      <div className="flex justify-center items-center opacity-60 mb-2">
        <span>Don't have an account?</span>
        <Link
          href="/signup"
          className="font-normal"
        >
          Sign Up
        </Link>
      </div>
      <div className="flex justify-center items-center opacity-60 mb-3">
        <p>or</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="w-full bg-[#F9FAFB] opacity-60 border py-2 rounded-md flex justify-center items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 48 48">
            <path fill="#fbc02d" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#e53935" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4caf50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1565c0" d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <span>
            Continue With Google
          </span>
        </button>
      </div>
    </form>
  )
}