import { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";
import { useNavigate } from "react-router-dom";
import BackNav from "./components/BackNav";
export default function Marketplace({ themeSelector, navSelector }) {
  const [displayName, setDisplayName] = useState();
  const [categoryFocus, setCategoryFocus] = useState("None");
  const [categoryData, setCategoryData] = useState([]);
  const [nav, setNav] = useState("marketplace");
  const navigate = useNavigate();

  const [artBg, setArtBg] = useState();
  {
    /* Categories */
  }
  const [aiBg, setAiBg] = useState();
  const [webBg, setWebBg] = useState();
  const [marketingBg, setMarketingBg] = useState();
  const [videoBg, setVideoBg] = useState();
  const [designBg, setDesignBg] = useState();
  const [edBg, setEdBg] = useState();
  const [bizBg, setBizBg] = useState();
  {
    /* Dark mode variables */
  }
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [projectIds, setProjectIds] = useState([]);

  const [imgUrls, setImgUrls] = useState([]);

  const date = new Date();
  const day = date.getDate();
  const month = date.getDay();
  const year = date.getFullYear();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const name = user.displayName;
        setDisplayName(name);
      }
    });
    setTheme("light");
  }, []);
  useEffect(() => {}, [theme]);
  useEffect(() => {
    async function fetchData() {
      if (categoryFocus !== "None") {
        console.log(categoryFocus);
        const categoryDocs = await getDocs(collection(db, categoryFocus));
        const data = categoryDocs.docs.map((project) => project.data());
        setCategoryData(data);

        let allProjectUrls = [];
        for (const project of data) {
          // Loop through project data
          const projectID = project.projectId;
          const projectImageUrl = await getImgUrl(projectID); // Fetch URL for each project
          allProjectUrls.push(projectImageUrl);
        }
        setImgUrls(allProjectUrls);
      }
    }
    fetchData();
  }, [categoryFocus]);

  async function getImgUrl(projectID) {
    //Prepare the s3 connection
    const s3 = new S3Client({
      credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
      },
      region: import.meta.env.VITE_S3_REGION,
    });

    /* Step 1 Image */

    try {
      //Add bucket name and path
      const imageParams = {
        Bucket: import.meta.env.VITE_S3_BUCKET,
        Prefix: `${projectID}/images/`,
      };
      //Prepare command to list the objects
      const imageCommand = new ListObjectsCommand(imageParams);
      //Send the command to get the images
      const imageResponse = await s3.send(imageCommand);

      const imageUrl = imageResponse.Contents
        ? imageResponse.Contents.map(
            (obj) =>
              `https://${import.meta.env.VITE_S3_BUCKET}.s3.amazonaws.com/${
                obj.Key
              }`
          )
        : [];
      return imageUrl;
      // Update the imageUrls state or perform any other actions with the URLs here
    } catch (error) {
      console.error("Error fetching image URLs:", error);
    }
  }

  function displayCategoryData() {
    return categoryData.map((item, index) => (
      <div
        key={index}
        className={`data-container ${
          theme == "light" ? "text-text_dark" : "text-text_light"
        } w-[32%] px-6`}
      >
        <img
          className="w-full h-[35vh] rounded-md"
          src={imgUrls[index]}
          key={index}
          alt="Project Image"
        />
        <div
          className={`project-info mt-3 ${
            theme == "light"
              ? " text-text_dark"
              : "bg-[#00392F] text-text_light"
          } px-4`}
        >
          <h2 className="text-sm flex justify-between font-bold mb-2">
            {item.title}
          </h2>
          <h2>${item.price}</h2>
          <h2>{item.displayName}</h2>
        </div>
      </div>
    ));
  }

  if (!displayName) {
    return null;
  }
  function setEverythingNormal() {
    setAiBg(theme == "light" ? "" : "bg-bkg_dark");
    setArtBg(theme == "light" ? "" : "bg-bkg_dark");
    setBizBg(theme == "light" ? "" : "bg-bkg_dark");
    setDesignBg(theme == "light" ? "" : "bg-bkg_dark");
    setEdBg(theme == "light" ? "" : "bg-bkg_dark");
    setMarketingBg(theme == "light" ? "" : "bg-bkg_dark");
    setVideoBg(theme == "light" ? "" : "bg-bkg_dark");
    setWebBg(theme == "light" ? "" : "bg-bkg_dark");
  }

  function handleAi() {
    setEverythingNormal();
    setAiBg("bg-[#E9E920] text-text_dark");
    setCategoryFocus("AI");
  }
  function handleArt() {
    setEverythingNormal();
    setArtBg("bg-[#E9E920] text-text_dark");
    setCategoryFocus("Art");
  }
  function handleWeb() {
    setEverythingNormal();
    setWebBg("bg-[#E9E920] text-text_dark");
    setCategoryFocus("Web development");
  }
  function handleMarketing() {
    setEverythingNormal();
    setMarketingBg("bg-[#E9E920] text-text_dark");
    setCategoryFocus("Marketing");
  }
  function handleVideo() {
    setEverythingNormal();
    setVideoBg("bg-[#E9E920] text-text_dark");
    setCategoryFocus("Video");
  }
  function handleDesign() {
    setEverythingNormal();
    setDesignBg("bg-[#E9E920] text-text_dark");
    setCategoryFocus("Design");
  }
  function handleEducation() {
    setEverythingNormal();
    setEdBg("bg-[#E9E920] text-text_dark");
    setCategoryFocus("Education");
  }
  function handleBusiness() {
    setEverythingNormal();
    setBizBg("bg-[#E9E920] text-text_dark");
    setCategoryFocus("Business");
  }
  const handleTheme = (theme) => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  const handleNavSelector = async (navChosen) => {
    setNav(navChosen);
    if (navChosen == "account") {
      navigate("/studentaccount");
    } else if (navChosen == "marketplace") {
      navigate("/marketplace");
    } else {
      navigate("/chat");
    }
  };
  return (
    <>
      <BackNav themeSelector={handleTheme} navSelector={handleNavSelector} />
      <div
        className={`${
          theme == "light"
            ? "bg-bkg_light text-text_dark"
            : "bg-bkg_dark text-text_light"
        } h-[100vh]`}
      >
        <div
          className={`text-2xl font-monaswb w-2/4 font-semibold text-center mx-auto pt-8 ${
            theme == "light" ? " text-text_dark" : "text-text_light"
          }`}
        >
          Explore a curated selection of fantastic projects, from AI to web
          development
        </div>
        <div
          className={`menu-options w-full mt-4 inline-flex flex-wrap items-center justify-center ${
            theme == "light" ? " text-text_dark" : "text-text_light"
          }`}
        >
          <div
            onClick={handleAi}
            className={`hover: cursor-pointer ai py-1 px-4 h-[10%] mx-4 ${aiBg} ${
              theme == "light" ? "border-[#004439]" : "border-[#ffffff]"
            }  border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            AI
          </div>
          <div
            onClick={handleWeb}
            className={`hover: cursor-pointer web py-1 px-4 h-[10%] mx-4 ${webBg} ${
              theme == "light" ? "border-[#004439]" : "border-[#ffffff]"
            } border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Web Development
          </div>
          <div
            onClick={handleDesign}
            className={`hover: cursor-pointer design py-1 px-4 h-[10%] mx-4 ${designBg} ${
              theme == "light" ? "border-[#004439]" : "border-[#ffffff]"
            } border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Design
          </div>
          <div
            onClick={handleMarketing}
            className={`hover: cursor-pointer marketing py-1 px-4 h-[10%] mx-4 ${marketingBg} ${
              theme == "light" ? "border-[#004439]" : "border-[#ffffff]"
            } border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Digital Marketing
          </div>
          <div
            onClick={handleEducation}
            className={`hover: cursor-pointer ed py-1 px-4 h-[10%] mx-4 ${edBg} ${
              theme == "light" ? "border-[#004439]" : "border-[#ffffff]"
            } border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Education
          </div>
          <div
            onClick={handleVideo}
            className={`hover: cursor-pointer vid py-1 px-4 h-[10%] mx-4 ${videoBg} ${
              theme == "light" ? "border-[#004439]" : "border-[#ffffff]"
            } border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Video
          </div>
          <div
            onClick={handleBusiness}
            className={`hover: cursor-pointer biz py-1 px-4 h-[10%] mx-4 ${bizBg} ${
              theme == "light" ? "border-[#004439]" : "border-[#ffffff]"
            } border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Business
          </div>
          <div
            onClick={handleArt}
            className={`hover: cursor-pointer art py-1 px-4 h-[10%] mx-4 ${artBg} ${
              theme == "light" ? "border-[#004439]" : "border-[#ffffff]"
            } border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Art
          </div>
        </div>
        {/* Category data */}
        {
          <div className="category-data">
            {categoryFocus == "None" ? (
              <h1 className="text-4xl text-center">Please select a Category</h1>
            ) : (
              <div className="data flex flex-wrap mt-7 w-[85%] justify-center mx-auto">
                {displayCategoryData()}
              </div>
            )}
          </div>
        }
      </div>
    </>
  );
}
