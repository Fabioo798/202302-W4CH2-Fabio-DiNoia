import { useState, SyntheticEvent } from "react";

import "./home.css";

export default function HomePage() {

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    birthday: "",
    gender: "",
    email: "",
    newsletter: false,
  });

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    window.location.href = "/step2";
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        name="name"
        required
        onChange={(username) =>
          setFormData({ ...formData, name: username.target.value })
        }
      ></input>
      <label>Last Name</label>
      <input
        type="text"
        name="last name"
        required
        onChange={(userlastname) =>
          setFormData({ ...formData, lastName: userlastname.target.value })
        }
      ></input>
      <label>Birthday</label>
      <input
        type="text"
        name=" Birthday"
        onChange={(birthday) =>
          setFormData({ ...formData, birthday: birthday.target.value })
        }
      ></input>
      <label>Gender</label>
      <span className="radiob">
        <label>
          Male
          <input
            type="radio"
            name="Gender"
            id="Gender"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          ></input>
        </label>
        <label>
          Female
          <input
            type="radio"
            name="Gender"
            id="male"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          ></input>
        </label>
        <label>
          not defined
          <input
            type="radio"
            name="Gender"
            id="female"
            onChange={(e) =>
              setFormData({ ...formData, gender: e.target.value })
            }
          ></input>
        </label>
      </span>
      <label>E-mail</label>
      <input
        type="text"
        name="E-mail"
        required
        onChange={(email) =>
          setFormData({ ...formData, email: email.target.value })
        }
      ></input>
      <span className="news">
        <label>
          <p>Subscribe to our newsletter!</p>
          <input
            type="checkbox"
            onChange={(newsletter) =>
              setFormData({
                ...formData,
                newsletter: newsletter.target.checked,
              })
            }
          />
        </label>
      </span>
      <button type="submit">Next</button>
    </form>
  );
}