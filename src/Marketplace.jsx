import { useState, useEffect } from "react";
import { auth, db } from "./firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, listAll } from "firebase/storage";
import { S3Client, ListObjectsCommand } from "@aws-sdk/client-s3";

export default function Marketplace() {
  const storage = getStorage();
  const [displayName, setDisplayName] = useState();
  const [categoryFocus, setCategoryFocus] = useState("None");
  const [categoryData, setCategoryData] = useState([]);

  const [artBg, setArtBg] = useState();

  const [aiBg, setAiBg] = useState();
  const [webBg, setWebBg] = useState();
  const [marketingBg, setMarketingBg] = useState();
  const [videoBg, setVideoBg] = useState();
  const [designBg, setDesignBg] = useState();
  const [edBg, setEdBg] = useState();
  const [bizBg, setBizBg] = useState();
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const [text, setText] = useState(localStorage.getItem("text"));
  const [projectIds, setProjectIds] = useState([]);
  const [imgUrls, setImgUrls] = useState([]);
  const [videoUrls, setVideoUrls] = useState([]);
  const [docUrls, setDocUrls] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const name = user.displayName;
        setDisplayName(name);
      }
    });
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (categoryFocus !== "None") {
        const categoryDocs = await getDocs(collection(db, categoryFocus));
        const data = categoryDocs.docs.map((project) => project.data());
        setCategoryData(data);

        await Promise.all(
          data.map(async (project) => {
            const projectID = project.projectId;
            await getAllUrls(projectID);
          })
        );
      }
    }
    fetchData();
  }, [categoryFocus]);

  async function getAllUrls(projectID) {
    //Prepare the s3 connection
    const s3 = new S3Client({
      credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
      },
      region: import.meta.env.VITE_S3_REGION,
    });

    /* Step 1 Images */

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
      console.log("imageResponse.Contents:", imageResponse.Contents); // Log contents before map

      const imageUrls = imageResponse.Contents
        ? imageResponse.Contents.map(
            (obj) =>
              `https://${import.meta.env.VITE_S3_BUCKET}.s3.amazonaws.com/${
                obj.Key
              }`
          )
        : [];
      setImgUrls(imageUrls);
      console.log(imageUrls);
      // Update the imageUrls state or perform any other actions with the URLs here
    } catch (error) {
      console.error("Error fetching image URLs:", error);
      // Define imageUrls as an empty array to prevent ReferenceError
      const imageUrls = [];
    }

    /* Step 2 Videos */
    try {
      //Prepare video parameter: Add bucket name and prefix
      const videoParams = {
        Bucket: import.meta.env.VITE_S3_BUCKET,
        Prefix: `${projectID}/videos/`,
      };
      // Prepare command to List the objects
      const videoCommand = new ListObjectsCommand(videoParams);
      //Send the command to get the videos
      const videoResponse = s3.send(videoCommand);
      const videoUrls = (await videoResponse).Contents.map(
        (obj) =>
          `https://${import.meta.env.VITE_S3_BUCKET}.s3.amazonaws.com/${
            obj.Key
          }`
      );
      console.log(videoUrls);
      setVideoUrls(videoUrls);
    } catch (error) {
      console.log(error);
    }

    /* Step 3 Documents */

    try {
      //Prepare the command parameter
      const documentsParams = {
        Bucket: import.meta.env.VITE_S3_BUCKET,
        Prefix: `${projectID}/documents/`,
      };
      //
      const documentsCommand = new ListObjectsCommand(documentsParams);
      const documentsResponse = s3.send(documentsCommand);

      const documentsUrls = (await documentsResponse).Contents.map(
        (obj) =>
          `https://${import.meta.env.VITE_S3_BUCKET}.s3.amazonaws.com/${
            obj.Key
          }`
      );
      console.log(documentsUrls);
      setDocUrls(documentsUrls);
    } catch (error) {
      console.log(error);
    }
  }

  function displayCategoryData() {
    return categoryData.map((item, index) => (
      <div key={index} className="data-container text-black w-[20%] mx-4">
        <img className="w-[100%]" src={imgUrls[index]} alt="Project Image" />
        <h2>Title: {item.title}</h2>
        <h2>Price: ${item.price} USD</h2>
        <h2>By: {item.user}</h2>
      </div>
    ));
  }

  if (!displayName) {
    return null;
  }
  function setEverythingNormal() {
    setAiBg("bg-white");
    setArtBg("bg-white");
    setBizBg("bg-white");
    setDesignBg("bg-white");
    setEdBg("bg-white");
    setMarketingBg("bg-white");
    setVideoBg("bg-white");
    setWebBg("bg-white");
  }

  function handleAi() {
    setEverythingNormal();
    setAiBg("bg-[#E9E920]");
    setCategoryFocus("AI");
  }
  function handleArt() {
    setEverythingNormal();
    setArtBg("bg-[#E9E920]");
    setCategoryFocus("Art");
  }
  function handleWeb() {
    setEverythingNormal();
    setWebBg("bg-[#E9E920]");
    setCategoryFocus("Web");
  }
  function handleMarketing() {
    setEverythingNormal();
    setMarketingBg("bg-[#E9E920]");
    setCategoryFocus("Marketing");
  }
  function handleVideo() {
    setEverythingNormal();
    setVideoBg("bg-[#E9E920]");
    setCategoryFocus("Video");
  }
  function handleDesign() {
    setEverythingNormal();
    setDesignBg("bg-[#E9E920]");
    setCategoryFocus("Design");
  }
  function handleEducation() {
    setEverythingNormal();
    setEdBg("bg-[#E9E920]");
    setCategoryFocus("Education");
  }
  function handleBusiness() {
    setEverythingNormal();
    setBizBg("bg-[#E9E920]");
    setCategoryFocus("Business");
  }

  return (
    <>
      <div className={`${theme} h-[100vh]`}>
        <div
          className={`text-2xl text-black font-monaswb w-2/4 font-semibold text-center mx-auto pt-8`}
        >
          Explore a curated selection of interactive design projects, from
          advanced web design to detailed illustrations
        </div>
        <div className="menu-options w-full mt-4 inline-flex flex-wrap items-center justify-center text-[#004439] ">
          <div
            onClick={handleAi}
            className={`hover: cursor-pointer ai py-1 px-4 h-[10%] mx-4 ${aiBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            AI
          </div>
          <div
            onClick={handleWeb}
            className={`hover: cursor-pointer web py-1 px-4 h-[10%] mx-4 ${webBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Web Development
          </div>
          <div
            onClick={handleDesign}
            className={`hover: cursor-pointer design py-1 px-4 h-[10%] mx-4 ${designBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Design
          </div>
          <div
            onClick={handleMarketing}
            className={`hover: cursor-pointer marketing py-1 px-4 h-[10%] mx-4 ${marketingBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Digital Marketing
          </div>
          <div
            onClick={handleEducation}
            className={`hover: cursor-pointer ed py-1 px-4 h-[10%] mx-4 ${edBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Education
          </div>
          <div
            onClick={handleVideo}
            className={`hover: cursor-pointer vid py-1 px-4 h-[10%] mx-4 ${videoBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Video
          </div>
          <div
            onClick={handleBusiness}
            className={`hover: cursor-pointer biz py-1 px-4 h-[10%] mx-4 ${bizBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
          >
            Business
          </div>
          <div
            onClick={handleArt}
            className={`hover: cursor-pointer art py-1 px-4 h-[10%] mx-4 ${artBg} border-[#004439] border-opacity-30 border-[1px] rounded-xl text-center`}
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
              <div className="data px-4 flex flex-wrap mt-4">
                {displayCategoryData()}
              </div>
            )}
          </div>
        }
      </div>
    </>
  );
}
