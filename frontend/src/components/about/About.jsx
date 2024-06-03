import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
        Welcome to ToDo List, where productivity meets simplicity. 
        We understand the importance of staying organized in today's fast-paced world, 
        and that's why we've created a powerful yet intuitive to-do list application designed to 
        streamline your daily tasks and boost your productivity.<br/>

<br />At ToDo List, we believe that managing your tasks shouldn't be a chore. 
Our mission is to provide you with a user-friendly platform that empowers you to prioritize, 
organize, and accomplish your goals effortlessly. Whether you're a student juggling assignments, 
a professional balancing multiple projects, or a busy parent managing household chores, 
our app is here to simplify your life. <br/>

<br/> 
<b>Get Started Today:</b> <br/>
Ready to take control of your to-do list and supercharge your productivity? Join thousands of users who have already discovered the power of ToDo List. Sign up now and start organizing your life the easy way!
        </p>
      </div>
    </div>
  );
};

export default About;
