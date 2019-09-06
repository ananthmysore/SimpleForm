// code related to a specific form goes here, using the imported generic Form component
// see the SINGLE IMPLEMENTATION section for details
import React from "react";
import Form from "../Components/Form";
import { H1, Input, MyForm, Button, Container } from "./styles";

const INITIAL_VALUES = {
  firstName: "",
  lastName: "",
  areaCode: "",
  phoneNumber: ""
};

const handleFormSubmit = values => {
  console.log(`Submitted Values:\n${JSON.stringify(values)}`);
};

const UserContactForm = () => {
  return (
    <Container>
      <H1>User Contact Form</H1>
      <Form initialValues={INITIAL_VALUES} onSubmit={handleFormSubmit}>
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
        }) => (
          <MyForm onSubmit={e => handleSubmit(e)}>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              value={values.firstName}
              onChange={e => handleChange(e.target)}
              onBlur={e => handleBlur(e.target)}
              required
            />
            <Input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              value={values.lastName}
              onChange={e => handleChange(e.target)}
              onBlur={e => handleBlur(e.target)}
            />

            <Input
              id="areaCode"
              name="areaCode"
              type="number"
              placeholder="Area Code"
              value={values.areaCode}
              onChange={e => handleChange(e.target)}
              onBlur={e => handleBlur(e.target)}
            />
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              placeholder="Phone Number"
              value={values.phoneNumber}
              onChange={e => handleChange(e.target)}
              onBlur={e => handleBlur(e.target)}
              required
            />
            <Button type="submit">Submit</Button>
          </MyForm>
        )}
      </Form>
    </Container>
  );
};

export default UserContactForm;
