function App() {
  return (
    <div>
      <header className="text-xl text-[#d6d6d6]"></header>
      <main
        style={{
          backgroundImage:
            'url("https://assets.nflxext.com/ffe/siteui/vlv3/20bf1f4d-1c73-48fd-8689-310d6dd80efc/81bdc063-cb8f-4afe-8a02-a3131ca4ef5e/IN-en-20240812-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7998f3b6-63e3-424a-8328-550cf777ddce_large.jpg")',
          height: "600px",
        }}
        className="fixed inset-0 -z-10"
      ></main>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#00000064]"></div>
      <div>
        <img src="./assets/images/logo.png" alt="flixGenie logo" width={200} />
        <p className="text-white">Welcome to the FlixGenie</p>
        <div className="flex flex-col items-center">
          <div className="bg-gray-500 text-white">
            <span className="text-white">Sign In</span>
            <form action="" method="post">
              <div>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="border-2 border-gray-300 p-2 focus:outline-none w-full"
                />
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border-2 border-gray-300 p-2 mt-4 focus:outline-none w-full"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-red-700 text-white p-2 mt-4 rounded w-full rounded-lg"
                >
                  Sign In
                </button>
                <span className="block">
                  <input type="checkbox" name="rememberUser" id="rememberUse" />
                  <label htmlFor="rememberUse" className="text-white">
                    Remember Me
                  </label>
                  <a href="#" className="text-white">
                    Need help?
                  </a>
                </span>
                <div>
                  <a href="#">New to Netflix? Sign Up Now</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
