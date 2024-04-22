import Footer from "./components/Footer";
import SimpleNav from "./components/SimpleNav";

export default function SignIn() {
  return (
    <>
      <div className="signup w-full h-full font-customs ">
        <SimpleNav />
        <div className="login-card w-[33%] h-[40%] bg-[#F6FBFA] mx-auto mb-10">
          <div className="login-txt pt-4">
            {" "}
            <h2 className="font-bold text-2xl text-center">Log In</h2>
          </div>
          <form className="mt-[10%] w-[76%] mx-auto">
            <div className="email block">
              <label className="">Your Email</label>
              <br />
              <input
                className="w-full mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                type="email"
                placeholder="name@mail.com"
              />
            </div>
            <div className="password py-4">
              <label htmlFor="password" className="">
                Password
              </label>
              <br />

              <input
                className="w-full mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                type="email"
                placeholder="*********"
              />
            </div>

            <div className="terms inline">
              <input
                className="mr-1 border-[#0D1717] border-opacity-15"
                type="checkbox"
                required
              />
              <label>I accept the Terms And Conditions</label>
            </div>

            <div className="mx-[30%] mt-6 w-[35%]">
              <a
                href="/signup"
                className="ease-in transition-all inline-flex items-center justify-center px-10 py-3 text-base font-bold text-center text-[#00392F] rounded-2xl bg-[#E9E920] hover:bg-[#2C3835] hover:text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
              >
                Log In
              </a>
            </div>
            <div className="pb-10 text-center pt-3">
              Don’t have an account?{" "}
              <a className="underline hover:cursor-pointer hover:text-[#232db6]">
                Sign Up
              </a>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
}
