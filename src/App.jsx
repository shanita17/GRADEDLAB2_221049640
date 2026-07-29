import { useState } from "react";
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Student info stored in App.jsx using useState
  const [fullName] = useState("Shanita Mugimbi");
  const [studentNumber] = useState("221049640");
  const [qualification] = useState(
    "Diploma in Business Information Technology",
  );

  // Likes count, lifted up so it can be shared/logged from App if needed
  const [likes, setLikes] = useState(0);

  // Function passed down to StudentCard via props to increase likes
  const increaseLikes = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="app-container">
      <Header />

      <main className="main-content">
        <StudentCard
          fullName={fullName}
          studentNumber={studentNumber}
          qualification={qualification}
          likes={likes}
          onLike={increaseLikes}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
