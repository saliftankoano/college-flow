import { useState } from "react";
import SimpleNav from "./components/SimpleNav";
import Footer from "./components/Footer";
import SignUpForm from "./components/SignUpForm";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const Navigate = useNavigate();

  function handleSignIn() {
    Navigate("/signin");
  }
  const [showOptions, setShowOptions] = useState(true);
  const [showForm, setShowForm] = useState(false);

  const off = `<?xml version="1.0" encoding="utf-8"?>
  <!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
    <title>ionicons-v5-e</title>
    <path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#0D1717;stroke-miterlimit:10;stroke-width:32px;stroke-opacity:0.15;fill-opacity:0.15"/>
  </svg>`;

  const on = `<?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
  <svg width="24px" height="24px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><title>ionicons-v5-e</title><path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:none;stroke:#E9E920;stroke-miterlimit:10;stroke-width:32px"/><circle cx="256" cy="256" r="144" fill="#E9E920"/></svg>`;

  const [clientCircle, setClientCircle] = useState(off);
  const [studentCircle, setStudentCircle] = useState(off);
  const [clientBorderColor, setClientBorderColor] = useState("#dbdcdc");
  const [studentBorderColor, setStudentBorderColor] = useState("#dbdcdc");

  const [option, setOption] = useState("");
  function handleClientOption() {
    setOption("Client");
    setClientCircle(on);
    setStudentCircle(off);
    setClientBorderColor(
      clientBorderColor == "#dbdcdc" ? "#E9E920" : "#dbdcdc"
    );
    setStudentBorderColor("#dbdcdc");
  }
  function handleStudentOption() {
    setOption("Student");
    setClientCircle(off);
    setStudentCircle(on);
    setStudentBorderColor(
      studentBorderColor == "#dbdcdc" ? "#E9E920" : "#dbdcdc"
    );
    setClientBorderColor("#dbdcdc");
  }
  function handleShowForm() {
    setShowOptions(false);
    setShowForm(true);
  }
  return (
    <>
      <div className="signup bg-white">
        <SimpleNav />
        {showOptions && (
          <div className="bg-white">
            <section className="signup w-full h-[70vh] font-customs bg-white">
              <div className="title flex">
                {" "}
                <h1 className="flex text-black text-xl text-center font-semibold sm:text-2xl md:text-2xl lg:text-4xl lg:mx-auto">
                  Join as a client or student
                </h1>
              </div>
              <div className="w-[70%] sm:w-[60%] sm:mx-auto md:w-[50%] lg:w-[36%] mx-auto mt-10">
                <div className="inline-flex w-full">
                  {/* Client option */}
                  <div
                    className={`client w-[48%] h-[30%] mr-[4%] py-5 border-[${clientBorderColor}] border-[1px]`}
                    onClick={handleClientOption}
                  >
                    <div className="ml-[85%] circleSVG">
                      <div
                        className="circle"
                        dangerouslySetInnerHTML={{ __html: clientCircle }}
                      />
                    </div>
                    {/* SUITCASE SVG */}
                    <svg
                      className="ml-3 "
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 3H16V17H4V3H6V2C6 1.46957 6.21071 0.960859 6.58579 0.585786C6.96086 0.210714 7.46957 0 8 0H12C12.5304 0 13.0391 0.210714 13.4142 0.585786C13.7893 0.960859 14 1.46957 14 2V3ZM17 3H18C18.5304 3 19.0391 3.21071 19.4142 3.58579C19.7893 3.96086 20 4.46957 20 5V15C20 15.5304 19.7893 16.0391 19.4142 16.4142C19.0391 16.7893 18.5304 17 18 17H17V3ZM3 3V17H2C1.46957 17 0.960859 16.7893 0.585786 16.4142C0.210714 16.0391 0 15.5304 0 15V5C0 3.9 0.9 3 2 3H3ZM8 2V3H12V2H8Z"
                        fill="#004439"
                      />
                    </svg>
                    <div className="text mt-3 ml-3 text-black text-xl font-medium">
                      I’m a client, hiring for a project
                    </div>
                  </div>
                  {/* Student option */}
                  <div
                    className={`student w-[48%] pt-5 border-[${studentBorderColor}] border-[1px]`}
                    onClick={handleStudentOption}
                  >
                    <div className="ml-[85%]">
                      <div
                        className="circle"
                        dangerouslySetInnerHTML={{ __html: studentCircle }}
                      />
                    </div>
                    {/* LAPTOP SVG */}
                    <svg
                      className="mt-[-3%] ml-3 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_555_12631)">
                        <path
                          d="M20.9999 19C21.2547 19.0003 21.4999 19.0979 21.6852 19.2728C21.8706 19.4478 21.9821 19.687 21.997 19.9414C22.012 20.1958 21.9292 20.4464 21.7656 20.6418C21.602 20.8373 21.37 20.9629 21.1169 20.993L20.9999 21H2.99987C2.74499 20.9997 2.49984 20.9021 2.3145 20.7272C2.12916 20.5522 2.01763 20.313 2.0027 20.0586C1.98776 19.8042 2.07054 19.5536 2.23413 19.3582C2.39772 19.1627 2.62977 19.0371 2.88287 19.007L2.99987 19H20.9999ZM18.9999 4C19.5044 3.99984 19.9904 4.19041 20.3604 4.5335C20.7304 4.87659 20.957 5.34684 20.9949 5.85L20.9999 6V16C21 16.5046 20.8095 16.9906 20.4664 17.3605C20.1233 17.7305 19.653 17.9572 19.1499 17.995L18.9999 18H4.99987C4.49529 18.0002 4.0093 17.8096 3.63932 17.4665C3.26934 17.1234 3.04271 16.6532 3.00487 16.15L2.99987 16V6C2.99971 5.49542 3.19028 5.00943 3.53337 4.63945C3.87646 4.26947 4.34671 4.04284 4.84987 4.005L4.99987 4H18.9999Z"
                          fill="#004439"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_555_12631">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <div className="text mt-3 ml-3 text-black text-xl font-medium">
                      I’m a student, looking for work
                    </div>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <button
                    className="ease-in transition-all inline-flex items-center justify-center px-6 py-2 bg-[#E9E920] hover:bg-[#2C3835] hover:text-white rounded-2xl font-bold text-base text-[#004439]"
                    onClick={handleShowForm}
                  >
                    Create Account
                  </button>
                  <div className="text-black mt-2">
                    Already have an account{" "}
                    <div
                      onClick={handleSignIn}
                      className="text-[#004439] underline"
                    >
                      Log In
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        {showForm && <SignUpForm entity={option} />}
        <Footer />
      </div>
    </>
  );
}
