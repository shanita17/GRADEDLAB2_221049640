import { useState, useEffect } from "react";
import myPhoto from "../assets/profile.jpg";

function StudentCard({
  fullName,
  studentNumber,
  qualification,
  likes,
  onLike,
}) {
  // Local state to hold the uploaded profile picture
  const [profilePic, setProfilePic] = useState(myPhoto);

  // Runs a console log every time the likes count changes
  useEffect(() => {
    if (likes > 0) {
      console.log("Profile liked.");
    }
  }, [likes]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <div className="student-card">
      <div className="profile-pic-wrapper">
        {profilePic ? (
          <img
            src={profilePic}
            alt={`${fullName}'s profile`}
            className="profile-pic"
          />
        ) : (
          <div className="profile-pic-placeholder">No Photo</div>
        )}
      </div>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="upload-input"
      />

      <h2 className="student-name">{fullName}</h2>
      <p className="student-info">
        <strong>Student Number:</strong> {studentNumber}
      </p>
      <p className="student-info">
        <strong>Qualification:</strong> {qualification}
      </p>

      <button className="like-button" onClick={onLike}>
        Like Profile
      </button>
      <p className="likes-count">Likes: {likes}</p>
    </div>
  );
}

export default StudentCard;
