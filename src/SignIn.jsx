import Footer from "./components/Footer";
import SimpleNav from "./components/SimpleNav";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth, db } from "./firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, doc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const SigninSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
  });
  const Navigate = useNavigate();
  async function handleSignIn(values) {
    const { email, password } = values;

    try {
      const userCredentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const id = auth.currentUser.uid;
      // Query for to determine user account type
      const userDocRef = doc(db, "users", id);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        const userData = userDoc.data();

        if (userData.accountType === "Student") {
          const { accountType, description, portfolio, order } = userData;
          Navigate("/student");
        } else {
          const { accountType, hires, favorites } = userData;
          Navigate("/client");
        }
      }
    } catch (error) {
      console.log("An error occured: " + error);
    }
  }
  return (
    <>
      <div className="signup w-full h-full font-customs ">
        <SimpleNav />
        <div className="login-card w-[33%] h-[40%] bg-[#F6FBFA] mx-auto mb-10">
          <div className="login-txt pt-4">
            {" "}
            <h1 className="font-bold text-2xl text-center">Log In</h1>
          </div>
          <Formik
            validationSchema={SigninSchema}
            initialValues={{
              email: "",
              password: "",
            }}
            onSubmit={(values) => {
              handleSignIn(values);
            }}
          >
            {({ isValid, dirty }) => (
              <Form className="mt-[10%] w-[76%] mx-auto">
                <div className="email block">
                  <label className="">Your Email</label>
                  <br />
                  <Field
                    name="email"
                    className="w-full mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                    type="email"
                    placeholder="name@mail.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="password py-4">
                  <label htmlFor="password" className="">
                    Password
                  </label>
                  <br />

                  <Field
                    name="password"
                    className="w-full mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                    type="password"
                    placeholder="••••••••"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="submission mx-[30%] mt-6 w-[38%]">
                  <button
                    className="ease-in transition-all inline-flex items-center justify-center px-10 py-3 text-base font-bold text-center text-[#00392F] rounded-2xl bg-[#E9E920] hover:bg-[#2C3835] hover:text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                    type="submit"
                    disabled={!isValid || !dirty}
                  >
                    Log In
                  </button>
                </div>
                <div className="pb-10 text-center pt-3">
                  Don’t have an account?{" "}
                  <a
                    className="underline hover:cursor-pointer hover:text-[#232db6]"
                    href="/signup"
                  >
                    Sign Up
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <Footer />
      </div>
    </>
  );
}
