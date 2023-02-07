import { Link } from "react-router-dom";
import './home.css'

export default function HomePage() {
  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" id="name"></input>
      <label>Last Name</label>
      <input type="text" name="last name" id="name"></input>
      <label>Birthday</label>
      <input type="text" name=" Birthday" id="Birthday"></input>
      <label>Gender</label>
      <span className="radiob">
        <label>
          Male
          <input type="radio" name="Gender" id="Gender"></input>
        </label>
        <label>
          Female
          <input type="radio" name="Gender" id="male"></input>
        </label>
        <label>
          not defined
          <input type="radio" name="Gender" id="female"></input>
        </label>
      </span>
      <label>E-mail</label>
      <input type="text" name="E-mail" id="E-mail"></input>
      <span className="news">
        <label>
          <p>Subscribe to our newsletter!</p>
          <input type="checkbox" />
        </label>
      </span>
      <Link to="./step2">next</Link>
    </form>
  );
}