// @flow
import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Modal, Divider } from "semantic-ui-react";

class SignUp extends React.Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button fluid onClick={this.show("blurring")}>
          Sign UP
        </Button>
        <Modal
          size="small"
          dimmer={dimmer}
          open={open}
          onClose={this.close}
          closeIcon
        >
          <Modal.Content>
            <h1> Sign up to book </h1>
            <h4>You’re moments away from booking your stay.</h4>
            <Divider />
            <Button
              fluid
              size="large"
              color="facebook"
              onClick={this.show("inverted")}
            >
              <Icon name="facebook" /> Facebook
            </Button>
            <Divider />
            <Button fluid size="large" color="google plus">
              <Icon name="google plus" /> Google Plus
            </Button>
            <Divider horizontal>Or</Divider>
            <Button fluid size="large" style={{ backgroundColor: "#FF5A5F" }}>
              <Icon name="mail" /> Signup with Email
            </Button>
            Already have an Airbnb account?
            <Link to={`/login`}>log in</Link>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default SignUp;
