export default function Login() {
  return (
    <div className="flex flex-col m-3">
      <h1 className="text-center text-3xl font-bold underline gap-1 mb-4">
        Login
      </h1>
      <form className="flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="Username"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
