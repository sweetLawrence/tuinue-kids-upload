import React, { useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";

function UploadImage() {
  const [selectedImage, setSelectedImage] = useState();
  const [uploading, setUploading] = useState(false);

  const handleImageUpload = async () => {
    // console.log(selectedImage);
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", selectedImage);

      formData.append("upload_preset", "xjm8f3xh");
      let response = await axios.post(
        "https://api.cloudinary.com/v1_1/dvtvxlnrh/image/upload",
        formData
      );
      const imageUrl = response.data.secure_url;
      // console.log(imageUrl);

      const pockethostResponse = await axios.post(
        // https://offering.pockethost.io/api/collections/Gallery/records
        

        "https://tuinuekidsgallery.pockethost.io/api/collections/Tuinuekidsimages/records",
        { url: imageUrl }
      );
      // console.log("Pockethost response:", pockethostResponse);
    } catch (error) {
      console.error("Error uploading image:", error);
    } finally {
      setUploading(false); 
    }

    setSelectedImage(null);
  };
  // console.log(selectedImage);

  return (
    <div className="upload">
      <div className="left">
        {" "}
        {selectedImage && (
          <div className="prev">
            <img
              src={selectedImage && URL.createObjectURL(selectedImage)}
              alt="Preview"
              style={{
                maxWidth: "300px",
                maxHeight: "300px",
                marginBottom: "20px",
              }}
            />
          </div>
        )}
        <input
          type="file"
          id="upload-input"
          onChange={(event) => {
            setSelectedImage(event.target.files[0]);
          }}
          accept="image/*"
          style={{ display: "none" }} // Hide default input button
        />
        {/* Custom button to trigger input click */}
        <div className="btns">
          <label htmlFor="upload-input">Select Image</label>
          {selectedImage && (
            <button className="upload-x" onClick={handleImageUpload}>
              {uploading ? <Spinner /> : "Upload"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadImage;
