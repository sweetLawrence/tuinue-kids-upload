import React, { useState } from "react";

function UploadImage() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle image upload
  const handleImageUpload = () => {
    // You can implement your upload logic here
    // console.log("Upload image:", selectedImage);
    alert("#")
    // Reset selected image after upload
    setSelectedImage(null);
  };

  return (
    <div className="upload">
      {/* Input for selecting image */}
      <div className="left">
        {" "}
        {selectedImage && (
          <div className="prev">
            <img
              src={selectedImage}
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
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: "none" }} // Hide default input button
        />
        {/* Custom button to trigger input click */}
        <div className="btns">
          <label htmlFor="upload-input">Select Image</label>
          {selectedImage && (
            <button className="upload-x" onClick={handleImageUpload}>Upload Image</button>
          )}
        </div>
      </div>
  
    </div>
  );
}

export default UploadImage;
