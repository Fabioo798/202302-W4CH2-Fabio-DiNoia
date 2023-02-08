import { ReactElement } from "react";

interface FormData {
  name: string;
  lastName: string;
  birthday: string;
  gender: string;
  email: string;
  newsletter: boolean;
}

export function Step2Page(): ReactElement {
  const formData = localStorage.getItem("formData");
  if (formData) {
    const parsedData = JSON.parse(formData);
    return (
      <div>
        <p>Name: {parsedData.name}</p>
        <p>Last Name: {parsedData.lastName}</p>
        <p>Birthday: {parsedData.birthday}</p>
        <p>email: {parsedData.email}</p>
        <p>Geneder: {parsedData.gender}</p>
        <p>newsletter: {parsedData.newsletter}</p>
      </div>
    );
  } else {
    return <div>No data found</div>;
  }
}

export default Step2Page;