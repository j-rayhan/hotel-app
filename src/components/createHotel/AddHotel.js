//flow
import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Mutation , graphql } from "react-apollo";
import gql from "graphql-tag";

const ADD_HOTEL = gql`
  mutation addHotel($name: String!, $email: String!) {
    addHotel(name: $name, email: $email) @client {
      id
    }
  }
`;
const ADD_USER = gql`
  mutation addUser($name: String!, $age: Int!, $email: String!, $img: String!) {
    addUser(name: $name, age: $age, email: $email, img: $img) @client {
      id
    }
  }
`;
const GET_HOTELS = gql`
  {
    hotels @client {
      id
      name
      price
      distance
      rating
      img
    }
  }
`;

 class AddHotel extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Insert your hotel Information</h1>

        <FormExampleFieldControl {...this.props}/>
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
  handleSubmit = (e) => {
    // console.log("submit......", this.state);
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
      e.preventDefault();
      console.log('...add hotel....', this.props);
      
            this.props.mutate({
                variables: { name: name.trim(), email: email.trim() },
                refetchQueries: [{ query: GET_HOTELS }]
            }).then((ddd) => {
              console.log("data ", ddd);
              // this.props.history.push('/hotels')
              
            });
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
            autoComplete="off"
            onChange={this.handleChange}
          />
          <Form.Input
            icon="at"
            iconPosition="left"
            label="Email "
            placeholder="Email"
            name="email"
            value={email}
            autoComplete="off"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            label="Country"
            placeholder="Country name"
            name="country"
            value={country}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <Form.Input
            label="City"
            placeholder="City"
            name="city"
            value={city}
            autoComplete="off"
            onChange={this.handleChange}
          />
          <Form.Input
            label="Telephone "
            placeholder="Telephone Number"
            name="telephone"
            value={telephone}
            autoComplete="off"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.TextArea
          label="Overview"
          placeholder="Tell us more about you..."
          name="overview"
          value={overview}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <Form.TextArea
          label="Address"
          placeholder="Tell us about your address..."
          name="address"
          value={address}
          autoComplete="off"
          onChange={this.handleChange}
        />
        <Form.Checkbox
          label="I agree to the Terms and Conditions"
          name="check"
          checked={checked}
          autoComplete="off"
          onChange={this.toggle}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    );
  }
}


const AddHotelWithMutation = graphql(
  ADD_HOTEL
)(AddHotel);
// export default AddHotelWithMutation;

const HotelForm = (props) => (
  <Mutation mutation={ADD_HOTEL}>
    {addHotel => {
      let name, email;
      return (
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              addHotel({
                variables: {
                  name: name.value,
                  email: email.value
                }
              });
                props.history.push("/hotels");
            }}
          >          
            Name:
            <input
              ref={v => {
                name = v;
              }}
            />
            Email:
            <input
              ref={v => {
                email = v;
              }}
            />
            <button type="submit">Add User</button>
            </form>
        </div>
      );
    }}
  </Mutation>
);

export default HotelForm;