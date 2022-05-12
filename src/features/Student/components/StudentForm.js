import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import InputField from "components/FormFields/InputField";
import RadioField from "components/FormFields/RadioField";
import SelectField from "components/FormFields/SelecteField";

function StudentForm({ onSubmit, student, cities }) {
  const initValues = {
    name: "",
    company: "",
    gender: "male",
    city: "hcm",
  };
  const [formValues, setFormValues] = useState(initValues);

  useEffect(() => {
    if (student) {
      setFormValues(student);
    } else {
      setFormValues(initValues);
    }
  }, [student]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      formValues,
      type: student ? "edit" : "add",
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
        value={formValues.name}
        onChange={handleFieldChange}
      />
      <InputField
        name="age"
        label="Age"
        value={formValues.age}
        onChange={handleFieldChange}
      />
      <InputField
        name="mark"
        label="Mark"
        value={formValues.mark}
        onChange={handleFieldChange}
      />
      <RadioField
        name="gender"
        label="Gender"
        onChange={handleFieldChange}
        options={["male", "female"]}
        defaultValue={formValues.gender}
      />
      <SelectField
        name="city"
        label="City"
        options={cities}
        onChange={handleFieldChange}
        defaultValue={formValues.city}
      />

      <Button variant="contained" type="submit">
        {student ? "Update" : "Add"}
      </Button>
    </form>
  );
}

export default StudentForm;
