//@flow
import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Checkbox,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_USER = gql`
  mutation addUser(
    $email: String!
    $firstName: String!
    $lastName: String!
    $password: String!
    $dob: String!
  ) {
    addUser(
      email: $email
      firstName: $firstName
      lastName: $lastName
      password: $password
      dob: $dob
    ) @client {
      id
    }
  }
`;
// const ADD_HOUSE = gql`
//   mutation addHouse($name: String!, $email: String!) {
//     addHouse(name: $name, email: $email) @client {
//       id
//     }
//   }
// `;
const SignUpForm = props => (
  <Mutation mutation={ADD_USER}>
    {addUser => {
      let firstName, lastName, email, password, dob;
      return (
        <div className="signup-form">
          <Grid
            textAlign="center"
            style={{ height: "100%" }}
            verticalAlign="middle"
          >
            <Grid.Column style={{ maxWidth: 550 }}>
              <Header as="h4" color="teal" textAlign="center">
                <Message>
                  Sign up with <Link to={`/signup`}>Facebook</Link> or
                  <Link to={`/signup`}>Google</Link>
                </Message>
              </Header>
              <Form
                size="large"
                onSubmit={e => {
                  e.preventDefault();
                  console.log("...dob...", firstName);

                  addUser({
                    variables: {
                      firstName: firstName,
                      lastName: lastName,
                      email: email,
                      password: password,
                      dob: moment(props.startDate).format("L")
                    }
                  });
                  // props.history.push("/login");
                }}
              >
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon="mail"
                    iconPosition="left"
                    placeholder="E-mail address"
                    name="email"
                    autoComplete="off"
                    onChange={e => {
                      email = e.target.value;
                    }}
                  />
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="First Name"
                    name="firstName"
                    autoComplete="off"
                    onChange={e => (firstName = e.target.value)}
                  />
                  <Form.Input
                    fluid
                    icon="user"
                    iconPosition="left"
                    placeholder="Last Name"
                    name="lastName"
                    autoComplete="off"
                    onChange={e => (lastName = e.target.value)}
                  />
                  <Form.Input
                    fluid
                    icon="lock"
                    iconPosition="left"
                    placeholder="Create Password"
                    type="password"
                    name="password"
                    autoComplete="off"
                    onChange={e => (password = e.target.value)}
                  />
                  <div style={{ textAlign: "left", padding: "10px 0px" }}>
                    <h4>Birthday</h4>
                    <p>
                      To sign up, you must be 18 or older. Other people won’t
                      see your birthday.
                    </p>
                  </div>
                  <DatePicker
                    autoComplete="off"
                    isClearable={true}
                    dateFormat="DD/MM/YYYY"
                    selected={props.startDate}
                    onChange={props.handleChangeStart}
                    showMonthDropdown
                    showYearDropdown
                    dropdownMode="select"
                    placeholderText="Date OF Birth"
                    withPortal
                  />
                  <div style={{ textAlign: "left", padding: "10px 0px" }}>
                    We’ll send you marketing promotions, special offers,
                    inspiration, and policy updates via email.
                  </div>
                  <Button
                    style={{ backgroundColor: "#FF5A5F" }}
                    fluid
                    size="large"
                  >
                    Sign UP
                  </Button>
                  <div style={{ textAlign: "left", padding: "10px 0px" }}>
                    <Checkbox /> I don’t want to receive marketing messages from
                    Airbnb. I can also opt out of receiving these at any time in
                    my account settings or via the link in the message.
                  </div>
                </Segment>
              </Form>
              <Message>
                Already have an Hotel-app account?
                <Link to={`/login`}>Log In</Link>
                <p>
                  OR go to
                  <Link to={`/`}>Home page</Link>
                </p>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
      );
    }}
  </Mutation>
);

class SignupFormWithEmail extends React.Component {
  state = { startDate: undefined, endDate: undefined };
  handleChangeStart = date => this.setState({ startDate: date });
  render() {
    return (
      <SignUpForm
        startDate={this.state.startDate}
        handleChangeStart={this.handleChangeStart}
        {...this.props}
      />
    );
  }
}

export default SignupFormWithEmail;
