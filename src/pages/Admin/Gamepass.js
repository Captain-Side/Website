import React, { useState } from "react";
import {useSession} from "@clerk/clerk-react";
import { checkUserRole } from "../../utils/clerkUser";
import NotFoundPage from "../NotFoundPage";

const Gamepass = ({ gamepasses, onUpdateGamepasses }) => {
  const [newImage, setNewImage] = useState(null);

  const handleAddImage = () => {};

  const handleDeleteImage = (index) => {};

  const handleReplaceImage = (index) => {};

  const { session } = useSession();
  const userRole = checkUserRole(session);

  return (userRole!=="org:admin")
  ?(<>
  <NotFoundPage />
  </>
  )
  :(
    <div style={{ backgroundColor: "white", padding: "20px" }}>
      <h1 className="admin-edit-slideshow-heading">Edit Games </h1>

      {/* Add New Image section */}
      <div className="admin-add-image-section" style={{ marginBottom: "20px" }}>
        <h2 style={{ fontSize: "18px", marginBottom: "10px" }}>
          Add New Image
        </h2>
        <div className="admin-add-image-controls">
          <input
            type="file"
            onChange={(e) => setNewImage(e.target.files[0])}
            style={{
              marginRight: "10px",
              backgroundColor: "white",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            }}
          />
          <button
            onClick={handleAddImage}
            style={{
              backgroundColor: "#4CAF50",
              border: "none",
              color: "white",
              padding: "10px 20px",
              textAlign: "center",
              textDecoration: "none",
              fontSize: "16px",
            }}
          >
            Add
          </button>
        </div>
      </div>

      {/* Display the list of images with options to delete or replace */}
      <div
        className="admin-image-container"
        style={{
          backgroundColor: "white",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "5px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        {gamepasses.map((gamepass, index) => (
          <div
            key={index}
            className="admin-image-item"
            style={{ marginRight: "10px", marginBottom: "10px" }}
          >
            <img
              src={gamepass.img} // Make sure this is correctly referencing the imported image
              alt=""
              style={{ maxWidth: "100%", maxHeight: "200px", height: "auto" }}
            />
            <button
              onClick={() => handleDeleteImage(index)}
              style={{
                backgroundColor: "#4CAF50",
                border: "none",
                color: "white",
                padding: "5px 10px",
                fontSize: "14px",
                marginRight: "5px",
              }}
            >
              Delete
            </button>
            <button
              onClick={() => handleReplaceImage(index)}
              style={{
                backgroundColor: "#4CAF50",
                border: "none",
                color: "white",
                padding: "5px 10px",
                fontSize: "14px",
              }}
            >
              Replace
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gamepass;
