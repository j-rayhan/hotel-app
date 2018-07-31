//@flow
import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment,
  Divider,
  Icon
} from "semantic-ui-react";
import { Link } from "react-router-dom";

const SignupForm = () => (
  <div className="signup-form">
    {/*
      Heads up! The styles below are necessary for the correct render of this example.
      You can do same with CSS, the main idea is that all the elements up to the `Grid`
      below must have a height of 100%.
    */}
    <style>{`
      body > div,
      body > div > div,
      body > div > div > div.signup-form {
        height: 100%;
      }
    `}</style>
    <Grid textAlign="center" style={{ height: "100%" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Header as="h2" color="teal" textAlign="center">
          <Image src="assets/images/logo/logo-1.png" />Sign up to book Your Room
        </Header>
        <Form size="large">
          <Segment stacked>
            <h4>You’re moments away from booking your stay.</h4>
            <Divider />
            <Link to={`/signupWithEmail`}>
              <Button fluid size="large" style={{ backgroundColor: "#FF5A5F" }}>
                <Icon name="mail" /> Signup with Email
              </Button>
            </Link>
            <Divider horizontal>Or</Divider>
            <Link to={`/signupWithPhone`}>
              <Button fluid size="large" color="teal">
                <Icon name="phone" /> Log IN with Phone
              </Button>
            </Link>
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

export default SignupForm;

{
  /* <Divider />
  <Button fluid size="large" color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
            <Divider />
            <Button fluid size="large" color="google plus">
              <Icon name="google plus" /> Google Plus
            </Button> */
}
