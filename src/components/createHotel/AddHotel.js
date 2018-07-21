//flow
import React, { Component } from "react";
import { Form } from "semantic-ui-react";

export default class AddHotel extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Insert your hotel Information</h1>

        <FormExampleFieldControl />
      </div>
    );
  }
}

const options = [
  { key: "m", text: "Male", value: "male" },
  { key: "f", text: "Female", value: "female" }
];

class FormExampleFieldControl extends Component {
  state = {
    name: "",
    email: "",
    country: "",
    city: "",
    telephone: "",
    address: "",
    overview: "",
    checked: false,
    img: []
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  toggle = () => this.setState({ checked: !this.state.checked });
  handleSubmit = () => {
    console.log("submit......", this.state);
  };
  render() {
    const {
      name,
      email,
      country,
      city,
      telephone,
      address,
      checked,
      overview
    } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Name"
            placeholder="Hotel name"
            name="name"
            value={name}
            onChange={this.handleChange}
          />
          <Form.Input
            icon="at"
            iconPosition="left"
            label="Email "
            placeholder="Email"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            label="Country"
            placeholder="Country name"
            name="country"
            value={country}
            onChange={this.handleChange}
          />
          <Form.Input
            label="City"
            placeholder="City"
            name="city"
            value={city}
            onChange={this.handleChange}
          />
          <Form.Input
            label="Telephone "
            placeholder="Telephone Number"
            name="telephone"
            value={telephone}
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          label="Overview"
          placeholder="Tell us more about you..."
          name="overview"
          value={overview}
          onChange={this.handleChange}
        />
        <Form.TextArea
          label="Address"
          placeholder="Tell us about your address..."
          name="address"
          value={address}
          onChange={this.handleChange}
        />
        <Form.Checkbox
          label="I agree to the Terms and Conditions"
          name="check"
          checked={checked}
          onChange={this.toggle}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}
