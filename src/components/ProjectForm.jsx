import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth, db } from "../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { FileInput, Label, Modal, Button } from "flowbite-react";
import React, { useState, useEffect } from "react";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";

import { nanoid } from "nanoid";

const categories = [
  "AI",
  "Web Development",
  "Design",
  "Digital Marketing",
  "Education",
  "Consulting",
  "Art",
  "Videograpgy",
  "Virtual Reality",
  "Business",
].sort();

export default function ProjectForm(props) {
  {
    /* Defines the schema for the form */
  }
  const ProjectSchema = Yup.object().shape({
    projectTitle: Yup.string()
      .min(5, "Too Short!")
      .max(32, "Too Long!")
      .required("Required"),
    category: Yup.string().min(1, "Too short").required("Required"),
    price: Yup.number().required("Required"),
    description: Yup.string().min(10, "Too Short"),
    imgs: Yup.array(),
    vids: Yup.array(),
    docs: Yup.array(),
  });

  const [imgFiles, setImgFiles] = useState([]);
  const [vidFiles, setVidFiles] = useState([]);
  const [docFiles, setDocFiles] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {}, [imgFiles, vidFiles, docFiles]);

  const uploadToS3 = async (projectID) => {
    // Create S3 Connection
    const s3 = new S3Client({
      credentials: {
        accessKeyId: import.meta.env.VITE_AWS_ACCESS_KEY_ID,
        secretAccessKey: import.meta.env.VITE_AWS_SECRET_ACCESS_KEY,
      },
      region: import.meta.env.VITE_S3_REGION,
    });
    //Upload all Images
    try {
      await Promise.all(
        imgFiles.map(async (image) => {
          /* Specify the bucket name & what goes in there */
          const params = {
            Bucket: import.meta.env.VITE_S3_BUCKET,
            Key: `${projectID}/images/${image.name}`,
            Body: image,
            ACL: "public-read", // Allows reads by default
          };
          // Create the command to send the object
          const command = new PutObjectCommand(params);
          //Now send the command
          await s3.send(command);
        })
      );
      console.log("Succesfully uploaded all images");
    } catch (error) {
      console.log("Error uploading images: " + error);
    }
    //Upload all Videos
    try {
      await Promise.all(
        vidFiles.map(async (video) => {
          /* Specify the bucket name & what goes in there */
          const params = {
            Bucket: import.meta.env.VITE_S3_BUCKET,
            Key: `${projectID}/videos/${video.name}`,
            Body: video,
            ACL: "public-read", // Allows reads by default
          };
          // Create the command to send the video
          const command = new PutObjectCommand(params);
          //Now send the command
          await s3.send(command);
        })
      );
      console.log("Succesfully uploaded all videos");
    } catch (error) {
      console.log("Error uploading videos: " + error);
    }
    //Upload all Docs
    try {
      await Promise.all(
        docFiles.map(async (doc) => {
          /* Specify the bucket name & what goes in there */
          const params = {
            Bucket: import.meta.env.VITE_S3_BUCKET,
            Key: `${projectID}/documents/${doc.name}`,
            Body: doc,
            ACL: "public-read", // Allows reads by default
          };
          // Create the command to send the object
          const command = new PutObjectCommand(params);
          //Now send the command
          await s3.send(command);
        })
      );
      console.log("Succesfully uploaded all documents");
    } catch (error) {
      console.log("Error uploading documents: " + error);
    }
  };

  async function handleProjectSubmit(values) {
    //Form schema values ready to be transfered
    const { projectTitle, category, price, description } = values;
    const userId = auth.currentUser.uid;
    const displayName = auth.currentUser.displayName;

    try {
      //Create a random ID of 10 characters
      const projectId = nanoid(10);
      const metaData = {
        projectId: projectId,
        title: projectTitle,
        category: category,
        price: price,
        description: description,
        userId: userId,
        displayName: displayName,
      };
      {
        /* Set the metadata per student and its project */
      }
      await setDoc(
        doc(db, `users`, `students`, `${userId}`, `${projectId}`),
        metaData
      );
      {
        /* Set the metadata for each category and project from total display of a category */
      }
      await setDoc(doc(db, `${category}`, `${projectId}`), metaData);
      uploadToS3(projectId);
      const storage = getStorage();
    } catch (error) {
      console.error("Error occurred during sign up:", error);
    }
  }
  const handleImgUpload = (event) => {
    //Save the files in the upload elements for images
    const filesArray = Array.from(event.target.files);
    setImgFiles(filesArray);
  };

  const handleVidUpload = (event) => {
    //Save the files in the upload elements for videos

    const filesArray = Array.from(event.target.files);
    setVidFiles(filesArray);
  };

  const handleDocsUpload = (event) => {
    //Save the files in the upload elements for documents
    const filesArray = Array.from(event.target.files);
    setDocFiles(filesArray);
  };

  return (
    <>
      <section className="w-full bg-white">
        <div className="border-[#E9E9E9] border-[1px] rounded-md mt-8">
          <Formik
            initialValues={{
              projectTitle: "",
              category: "",
              price: "",
              description: "",
              imgs: [],
              vids: [],
              docs: [],
            }}
            validationSchema={ProjectSchema}
            onSubmit={(values, formikBag) => {
              handleProjectSubmit(values);
              setOpenModal(true);
              formikBag.resetForm(); // Reset the form after submission
            }}
          >
            {({ isValid, dirty }) => (
              <Form
                className="login-card w-full h-[40%] mx-auto mb-10 mt-9 font-customs text-black"
                encType="multipart/form-data"
              >
                <div className="pj-overview pt-4 border-[#0D1717] border-opacity-15 border-b">
                  <h1 className="font-bold text-2xl pb-2 pl-5">
                    Project Overview
                  </h1>
                </div>
                <div className="projectTitle mt-5 pl-5">
                  <label htmlFor="projectTitle">Project Title *</label>
                  <div className="title-explain text-[#0D1717] text-opacity-40">
                    A catchy title that shows your value
                  </div>
                  <Field
                    name="projectTitle"
                    className="w-[98%] mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                    type="text"
                    placeholder="I will build the best paper plane you've seen"
                  />
                  <ErrorMessage
                    name="projectTitle"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="project-category block mt-2 pl-5">
                  <label htmlFor="category">Category</label>
                  <br />
                  <Field
                    name="category"
                    as="select"
                    className="w-[98%] mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                  >
                    <option value="" disabled>
                      Select a category
                    </option>

                    <option value="AI">AI</option>
                    <option value="Art">Art</option>
                    <option value="Business">Business</option>
                    <option value="Consulting">Consulting</option>
                    <option value="Design">Design</option>
                    <option value="Education">Education</option>
                    <option value="Videography">Videography</option>
                    <option value="Virtual Reality">Virtual Reality</option>
                    <option value="Web development">Web development</option>
                  </Field>

                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="pricing py-4 pl-5">
                  <label htmlFor="pricing">Pricing</label>
                  <div className="title-explain text-[#0D1717] text-opacity-40"></div>

                  <Field
                    name="price"
                    className="w-[98%] mt-2 border-[#0D1717] border-opacity-15 rounded-md"
                    type="number"
                    placeholder="$"
                  />
                </div>
                <div className="w-[96%] mb-2 mx-auto image-upload">
                  <div>
                    <Label htmlFor="img-upload" value="Images: 10MB Max" />
                  </div>
                  <FileInput
                    name="img-upload"
                    id="small-file-upload"
                    sizing="sm"
                    accept=".jpeg,.png,.jpg,.gif,.svg,.webp; max-size: 10485760"
                    onChange={(e) => handleImgUpload(e)}
                    multiple
                  />
                </div>
                <div className="w-[96%] mb-2 mx-auto video-upload">
                  <div>
                    <Label htmlFor="video-upload" value="Videos: 100MB Max" />
                  </div>
                  <FileInput
                    name="video-upload"
                    sizing="sm"
                    accept=".mp4,.mov; max-size: 104857600"
                    onChange={(e) => handleVidUpload(e)}
                  />
                </div>
                <div className="w-[96%] mb-2 mx-auto docs-upload">
                  <div>
                    <Label htmlFor="small-file-upload" value="docs: 15MB Max" />
                  </div>
                  <FileInput
                    name="docs-upload"
                    sizing="sm"
                    accept=".docx,.pdf,.csv,.txt; max-size: 15728640"
                    onChange={(e) => handleDocsUpload(e)}
                    multiple
                  />
                </div>
                <div className="description py-4 pl-5">
                  <Label htmlFor="description">Description</Label>
                  <div className="title-explain text-[#0D1717] text-opacity-40">
                    Tell the client what you will deliver and how it benefits
                    them.
                  </div>
                  <Field
                    as="textarea"
                    name="description"
                    placeholder="Describe your service with detail here. Max 600 words"
                    id="desc"
                    rows="8"
                    maxlengh="3100"
                    className="form-control w-[98%] bg-white border border-[#0D1717] border-opacity-15 rounded-md mt-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-600"
                  ></Field>
                  <ErrorMessage
                    name="description"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="send-btn inline-flex mt-6 w-full justify-end">
                  <button
                    type="submit"
                    className="ml-5 mr-5 ease-in transition-all inline-flex items-center justify-center px-10 py-3 text-base font-bold text-center text-[#00392F] rounded-2xl bg-[#E9E920] hover:bg-[#2C3835] hover:text-white focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
                  >
                    Send
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <Modal show={openModal} onClose={() => setOpenModal(false)}>
          <Modal.Header>Success</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <h2 className="text-md leading-relaxed text-gray-500 dark:text-gray-400">
                Thank you for your submission
              </h2>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => setOpenModal(false)}>I accept</Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Decline
            </Button>
          </Modal.Footer>
        </Modal>
      </section>
    </>
  );
}
