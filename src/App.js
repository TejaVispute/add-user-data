import "./styles.css";
import { useState } from "react";
export default function App() {
  // created seperate states for name,age,profession,image URL
  let [name, setName] = useState();
  let [age, setAge] = useState();
  let [profession, setProfession] = useState();
  let [image, setImage] = useState();
  // main array of object that contains all user info
  let [userInfo, setUserInfo] = useState([
    {
      name: "Tejas",
      age: 23,
      profession: "Web Developer",
      image:
        "https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg"
    }
  ]);
  // onclick this function invoked for adding card in webpage
  let addDetails = () => {
    let newInfo = {
      name: name,
      age: age,
      profession: profession,
      image: image
    };
    // created copy of array of object and added new object in it
    let newObj = [...userInfo, newInfo];
    setUserInfo(newObj);
    // setName("");
  };
  return (
    <div className="App">
      <div className="inputFields">
        <input
          type="text"
          placeholder="Enter Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Profession"
          onChange={(e) => setProfession(e.target.value)}
        />
        <input
          type="text"
          placeholder="add image link"
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="" onClick={addDetails}>
          Add
        </button>
      </div>
      <div className="container">
        {/* iterate array to print it on webpage */}
        {userInfo.map((info) => (
          <div className="card">
            <div className="image-container">
              <img src={info.image} alt="blank" />
            </div>
            <div className="name">
              <h2>{info.name}</h2>
              <h4>{info.profession}</h4>
              <h5>Age : {info.age} yr</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
