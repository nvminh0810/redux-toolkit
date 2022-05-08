import { Button } from "@mui/material";
import React, { useState } from "react";
import InputField from "../../../components/FormFields/InputField";
import RadioField from "../../../components/FormFields/RadioField";
import SelectField from "../../../components/FormFields/SelecteField";

function UserForm({ onSubmit, user }) {
  const [formValues, setFormValues] = useState({
    name: "",
    company: "",
    gender: "Male",
    role: "Hr Manager",
    verified: false,
    status: false,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      formValues,
      type: user ? "edit" : "add",
    });
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <InputField
        name="name"
        label="Name"
        value={user ? user.name : formValues.name}
        onChange={handleFieldChange}
      />
      <InputField
        name="company"
        label="Company"
        value={user ? user.company : formValues.company}
        onChange={handleFieldChange}
      />
      <RadioField
        name="gender"
        label="Gender"
        onChange={handleFieldChange}
        options={["Male", "Female", "Other"]}
        defaultValue={user ? user.gender : formValues.gender}
      />
      <SelectField
        name="role"
        label="Role"
        options={[
          "UI/UX Designer",
          "Project Manager",
          "Hr Manager",
          "Full Stack Developer",
        ]}
        onChange={handleFieldChange}
        defaultValue={user ? user.role : formValues.role}
      />

      <Button variant="contained" type="submit">
        {user ? "Update" : "Add"}
      </Button>
    </form>
  );
}

export default UserForm;
