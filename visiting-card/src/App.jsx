import { useState } from "react";
import "./App.css";
function App() {
  const [userData, setUserData] = useState({
    name: "",
    age: 0,
    phone: "",
    web:"",
    submit: false,
  });
  function Url(url) {
    let cleanedUrl = url.replace(/^https?:\/\//, '');
    cleanedUrl = cleanedUrl.replace(/^www\./, '');

    return cleanedUrl;
}

  return (
    <>
   <h1> Visiting Card Generator</h1>
      <div className="vc-input">
        <p>
          <input
            type="text"
            onChange={(e) => setUserData({ ...userData, name: e.target.value,submit:false })}
          />
          <label>Name</label>
        </p>
        <p>
          <input
            type="text"
            onChange={(e) => setUserData({ ...userData, age: e.target.value ,submit:false })}
          />
          <label>Age</label>
        </p>
        <p>
          <input
            type="tel"
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value ,submit:false })
            }
          />
          <label>Phone</label>
        </p>
        <p>
          <input
            type="url"
            onChange={(e) =>
              setUserData({ ...userData, web: e.target.value })
            }
          />
          <label>Website</label>
        </p>
        <button onClick={() => setUserData({ ...userData, submit: true })}>
          Generate
        </button>
      </div>

      {userData.submit && (
        <div className="v-card">
          <div className="left">
            <img src="user.png" alt="" />
          </div>

          <div className="right">
            <p className="name">{userData.name}</p>
            <p className="age">{userData.age} years old</p>
            <p className="phone">{userData.phone}</p>
            <a className="web" href={userData.web}>{Url(userData.web)}</a>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
