// @flow
import React from "react";
import { Card, Divider, Button, Modal, Icon } from "semantic-ui-react";

class BookForm extends React.Component {
  state = {
    startDate: undefined,
    endDate: undefined,
    adults: 1,
    children: 0,
    infants: 0,
    totalGuests: 1,
    isOpen: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  onToggleOpen = () => {
    // console.log("....toggle.....", this.state.isOpen);
    if (this.state.isOpen) this.setState({ isOpen: false });
    if (!this.state.isOpen) this.setState({ isOpen: true });
  };
  addOne = () => {
    // console.log("....toggle.....", this.state.adults);
    var adults = this.state.adults;
    console.log(adults, "--");
    console.log("add", this.state.adults);
    this.setState({ adults: adults + 1 });
  };
  minusOne = () => {
    console.log("minus", this.state.adults);
    const { adults } = this.state;
    if (adults > 1) this.setState({ adults: adults - 1 });
  };
  addOneC = () => {
    // console.log("....toggle.....", this.state.adults);
    const { children } = this.state;
    this.setState({ children: children + 1 });
  };
  minusOneC = () => {
    const { children } = this.state;
    if (children > 0) this.setState({ children: children - 1 });
  };
  addOneI = () => {
    // console.log("....toggle.....", this.state.infants);
    const { infants } = this.state;
    if (infants < 5) this.setState({ infants: infants + 1 });
  };
  minusOneI = () => {
    const { infants } = this.state;
    if (infants > 0) this.setState({ infants: infants - 1 });
  };
  test = val => {
    console.log(val);
  };
  render() {
    const {
      startDate,
      endDate,
      adults,
      children,
      infants,
      isOpen
    } = this.state;
    var _that = this;
    let totalGuests = adults + children;
    console.log(this.state.totalGuests);
    return (
      <Card>
        <Card.Content header="$20 per night" />
        <Card.Content>
          <p>Dates</p>
          <span
            style={{
              backgroundColor: "yellow",
              display: "block",
              border: "3px solid #DBDBDB",
              padding: "5px"
            }}
          >
            Check In {startDate}-> Check Out {endDate}
          </span>
          <Divider />
        </Card.Content>
        <Card.Content>
          <p>Guests</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              backgroundColor: "#eee",
              border: "3px solid #DBDBDB",
              borderRadius: "2px"
            }}
            onClick={this.onToggleOpen}
          >
            <span
              style={{
                padding: "5px",
                width: "89%"
              }}
            >
              {totalGuests} guests {infants > 0 && infants + ` infants`}
            </span>
            <SvgDown />
          </div>

          {isOpen && (
            <div>
              <Adults
                adults={adults}
                addOne={() => {
                  _that.test(1111);
                }}
                minusOne={this.minusOne}
              />
              <Children
                children={children}
                addOne={this.addOne}
                minusOne={this.minusOneC}
              />
              <Infants
                infants={infants}
                addOne={this.addOneI}
                minusOne={this.minusOneI}
              />
            </div>
          )}

          <Divider />
          <BookModal />
        </Card.Content>
        <Card.Content extra>You won’t be charged yet</Card.Content>
      </Card>
    );
  }
}

const SvgDown = porps => (
  <div>
    <svg
      viewBox="0 0 18 18"
      role="presentation"
      aria-hidden="true"
      focusable="false"
      style={{
        height: "16px",
        width: "16px",
        display: "block",
        fill: "currentcolor"
      }}
    >
      <path
        d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z"
        fillRule="evenodd"
      />
    </svg>
  </div>
);

const Adults = props => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}
  >
    <span
      style={{
        padding: "10px",
        width: "60%"
      }}
    >
      <b style={{ fontSize: "16px" }}>Adults</b>
    </span>
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #DBDBDB",
        borderRadius: "50%",
        padding: "2px"
      }}
      onClick={props.minusOne}
    >
      <SvgCircle />
    </div>
    <div
      style={{
        margin: "5px 10px"
      }}
    >
      {props.adults}
    </div>
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#eee",
        border: "2px solid #DBDBDB",
        borderRadius: "50%",
        padding: "2px"
      }}
      onClick={props.addOne}
    >
      <SvgCircleAdd />
    </div>
  </div>
);

const Children = props => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}
  >
    <span
      style={{
        padding: "10px",
        width: "60%"
      }}
    >
      <b style={{ fontSize: "16px" }}>Children </b>
      <br />
      Ages 2–12
    </span>
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #DBDBDB",
        borderRadius: "50%",
        padding: "2px"
      }}
      onClick={props.minusOne}
    >
      <SvgCircle />
    </div>
    <div
      style={{
        margin: "5px 10px"
      }}
    >
      {props.children}
    </div>
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#eee",
        border: "2px solid #DBDBDB",
        borderRadius: "50%",
        padding: "2px"
      }}
      onClick={props.addOne}
    >
      <SvgCircleAdd />
    </div>
  </div>
);
const Infants = props => (
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center"
    }}
  >
    <span
      style={{
        padding: "10px",
        width: "60%"
      }}
    >
      <b style={{ fontSize: "16px" }}> Infants </b>
      <br />
      Under 2
    </span>
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#fff",
        border: "1px solid #DBDBDB",
        borderRadius: "50%",
        padding: "2px"
      }}
      onClick={props.minusOne}
    >
      <SvgCircle />
    </div>
    <div
      style={{
        margin: "5px 10px"
      }}
    >
      {props.infants}
    </div>
    <div
      style={{
        alignItems: "center",
        backgroundColor: "#eee",
        border: "2px solid #DBDBDB",
        borderRadius: "50%",
        padding: "2px"
      }}
      onClick={props.addOne}
    >
      <SvgCircleAdd />
    </div>
  </div>
);

const SvgCircleAdd = () => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label="add, 1 adult"
    focusable="false"
    style={{
      height: "1em",
      width: "1em",
      display: "block",
      fill: "currentcolor"
    }}
  >
    <rect height="2" rx="1" width="12" x="6" y="11" />
    <rect height="12" rx="1" width="2" x="11" y="6" />
  </svg>
);
const SvgCircle = () => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label="add, 1 adult"
    focusable="false"
    style={{
      height: "1em",
      width: "1em",
      display: "block",
      fill: "currentcolor"
    }}
  >
    <rect height="2" rx="1" width="12" x="6" y="11" />
  </svg>
);

class BookModal extends React.Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button
          fluid
          size="large"
          style={{ backgroundColor: "#FF5A5F" }}
          onClick={this.show("inverted")}
        >
          Book
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
            Already have an Airbnb account?Log in
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}
export default BookForm;
