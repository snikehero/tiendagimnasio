import React from "react";
import "./About.css";
import NavBar from "../NavBar/NavBar.jsx";
import AboutProfile from "../AboutUsProfile/AboutProfile.jsx";
export default function About() {
  return (
    <div className="AboutPage">
      <NavBar />
      <div class="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>
      <h2>Our Team</h2>
      <div class="row">
        <AboutProfile
          image={"https://api.dicebear.com/9.x/dylan/svg"}
          name={"Jane Doe"}
          title={"CEO"}
          description={"Lorem impsum"}
          email={"janedoe@test.com"}
        />
        <AboutProfile
          image={"https://api.dicebear.com/9.x/adventurer/svg"}
          name={"Mike Ross"}
          title={"Art Director"}
          description={"Some text that describes me lorem ipsum ipsum lorem."}
          email={"mike@example.com"}
        />
        <AboutProfile
          image={"https://api.dicebear.com/9.x/pixel-art/svg"}
          name={"John Doe"}
          title={"Designer"}
          description={"Some text that describes me lorem ipsum ipsum lorem."}
          email={"john@example.com"}
        />
      </div>
    </div>
  );
}
