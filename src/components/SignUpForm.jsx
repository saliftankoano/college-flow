import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth, db } from "../firebaseConfig";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { useNavigate } from "react-router-dom";

export default function SignUpForm(props) {
  const entity = props.entity; // Type Of entityount

  const storage = getStorage();
  const Navigate = useNavigate(); // Initialize useNavigate hook

  const SignupSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(75, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().min(2, "Too Short!").required("Required"),
    terms: Yup.boolean()
      .oneOf([true], "Must accept Terms and Conditions")
      .required("Must accept Terms and Conditions"),
  });

  async function handleSignUp(values) {
    const { fullName, email, password } = values;
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredentials.user;
      const id = auth.currentUser.uid;

      updateProfile(auth.currentUser, {
        displayName: fullName,
      });
      const path = entity === "Client" ? "clientdash" : "studentdash";
      Navigate(`/${path}`);
    } catch (error) {
      console.error("Error occurred during sign up:", error);
      // Handle specific errors and provide user feedback if needed
      if (error.code === "auth/email-already-in-use") {
        console.log("Email is already in use.");
        // Handle this specific error by showing an error message to the user
      } else if (error.code === "auth/weak-password") {
        console.log("Password is too weak.");
        // Handle this specific error by showing an error message to the user
      } else {
        console.log("An unknown error occurred.");
        // Handle other errors by showing a generic error message to the user
      }
    }
  }
  return (
    <>
      <section className="w-full form-container py-10">
        <div className="login-card w-[33%] h-[40%] bg-[#F6FBFA] mx-auto mb-10 font-customs text-black">
          <div className="login-txt pt-4">
            {" "}
            <h1 className="font-bold text-2xl text-center">
              Join Today As {entity}
            </h1>
          </div>

          <Formik
            initialValues={{
              fullName: "",
              email: "",
              password: "",
            }}
            validationSchema={SignupSchema}
            onSubmit={(values) => {
              handleSignUp(values);
            }}
          >
            {({ isValid, dirty }) => (
              <Form className="mt-[10%] w-[76%] mx-auto">
                <div className="name block">
                  <label>Full name</label>
                  <br />
                  <Field
                    name="fullName"
                    className="w-full mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                    type="text"
                    placeholder="John Smith"
                  />
                  <ErrorMessage
                    name="fullName"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="email block mt-2">
                  <label>Your Email</label>
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
                  <label htmlFor="password">Password</label>
                  <br />

                  <Field
                    name="password"
                    className="w-full mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
                <div className="terms inline">
                  <Field
                    name="terms"
                    className="mr-1 border-[#0D1717] border-opacity-15"
                    type="checkbox"
                    required
                  />
                  <label>I accept the Terms And Conditions</label>
                </div>

                <div className="login-btn mx-[30%] mt-6 w-[40%] flex justify-center">
                  <button
                    disabled={!isValid || !dirty}
                    type="submit"
                    className="ease-in transition-all inline-flex items-center justify-center px-10 py-3 text-base font-bold text-center text-[#00392F] rounded-2xl bg-[#E9E920] hover:bg-[#2C3835] hover:text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="already pb-10 text-center pt-3">
                  Already have an account?{" "}
                  <a
                    className="underline hover:cursor-pointer hover:text-[#232db6]"
                    href="/signin"
                  >
                    Log In
                  </a>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </section>
    </>
  );
}
