export default function ResetPasswordForm() {
  return (
    <form className="bg-white px-6 py-6 rounded-lg border w-3/12">
      <h3 className="text-2xl font-bold opacity-50 mb-5">Reset Password</h3>
      <div className="flex flex-col mb-5">
        <label htmlFor="email" className="mb-1 opacity-60">Email</label>
        <input className="bg-[#F9FAFB] border p-2 rounded-md" type="email" id="email" />
      </div>
      <div className="flex mb-3">
        <button className="w-full bg-[#F9FAFB] opacity-60 py-2 border rounded-md">Sent reset password link</button>
      </div>
    </form>
  )
}
