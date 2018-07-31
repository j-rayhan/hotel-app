// @flow
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Label, Message } from "semantic-ui-react";

class App extends Component {
  state = { countryCode: "", phoneNumber: "" };
  componentDidMount() {
    window.AccountKit.init({
      appId: "285999858818729",
      state: "4adfaafb-c934-7e8c-8aa3-12c5918a4b55",
      version: "v1.0",
      fbAppEventsEnabled: true
    });
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  smsLogin = () => {
    let { countryCode, phoneNumber } = this.state;
    if (countryCode.length < 1) countryCode = "+880";
    console.log("......", countryCode);
    window.AccountKit.login(
      "PHONE",
      { countryCode, phoneNumber }, // will use default values if not specified
      this.loginCallback
    );
  };
  loginCallback(res) {
    console.log("......", res);
  }
  render() {
    return (
      <div
        style={{ marginTop: "25%", display: "flex", justifyContent: "center" }}
      >
        <div>
          <Input labelPosition="right" type="text" placeholder="Amount">
            <Label basic>+880</Label>
            <input
              placeholder="your phone number"
              value={this.state.phoneNumber}
              onChange={e => {
                this.setState({ phoneNumber: e.target.value });
              }}
            />
            <Label onClick={this.smsLogin} color="teal">
              Login
            </Label>
          </Input>
        </div>
        <br />
        <div>
          <Message>
            <p>
              OR go to
              <Link to={`/`}>Home page</Link>
            </p>
          </Message>
        </div>
      </div>
    );
  }
}

export default App;
