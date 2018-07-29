// @flow
import React from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { Card, Divider, Button, Modal, Icon } from "semantic-ui-react";

class BookForm extends React.Component {
  state = {
    serviceFee: 6,
    amount: 10,
    startDate: undefined,
    endDate: undefined,
    adults: 1,
    children: 0,
    infants: 0,
    totalGuests: 1,
    isOpen: false
  };

  handleChange = (e, { name, value }) => this.setState({ [name]: value });
  handleChangeStart = date => this.setState({ startDate: date });
  handleChangeEnd = date => this.setState({ endDate: date });
  onToggleOpen = () => {
    // console.log("....toggle.....", this.state.isOpen);
    if (this.state.isOpen) this.setState({ isOpen: false });
    if (!this.state.isOpen) this.setState({ isOpen: true });
  };
  addOne = increase => {
    // console.log("....toggle.....", increase);
    const { adults, children, infants } = this.state;
    // console.log(adults, "--");
    // console.log("add", this.state.adults);
    switch (increase) {
      case "adults":
        this.setState({ adults: adults + 1 });
        break;
      case "children":
        this.setState({ children: children + 1 });
        break;
      case "infants":
        if (infants < 5) this.setState({ infants: infants + 1 });
        break;
      default:
        break;
    }
  };
  minusOne = decrease => {
    // console.log("....toggle.....", decrease);
    const { adults, children, infants } = this.state;
    // console.log(adults, "--");
    // console.log("decrease", this.state.adults);
    switch (decrease) {
      case "adults":
        if (adults > 1) this.setState({ adults: adults - 1 });
        break;
      case "children":
        if (children >= 1) this.setState({ children: children - 1 });
        break;
      case "infants":
        if (infants >= 1) this.setState({ infants: infants - 1 });
        break;
      default:
        break;
    }
  };
  daysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  };
  render() {
    const {
      amount,
      startDate,
      endDate,
      adults,
      children,
      infants,
      isOpen
    } = this.state;
    let { serviceFee } = this.state;
    var _that = this;
    let totalGuests = adults + children;
    const amountHeader = `$ ` + amount + ` per night`;
    let date1, date2, timeDiff, diffDays, night;
    date1 = new Date(moment(startDate).format("L"));
    date2 = new Date(moment(endDate).format("L"));
    timeDiff = Math.abs(date2.getTime() - date1.getTime());
    diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    // console.log(".....day...", diffDays);
    // console.log("....total amount....", month_1, month_2);
    startDate ? (night = diffDays + 1) : ((night = 0), (serviceFee = 0));
    let totalAmount = amount * night + serviceFee;
    return (
      <Card>
        <Card.Content header={amountHeader} />
        <Card.Content>
          <p>Dates</p>
          <div
            style={{
              backgroundColor: "#eee",
              display: "block",
              border: "3px solid #DBDBDB",
              padding: "5px"
            }}
          >
            <Dates
              startDate={startDate}
              endDate={endDate}
              handleChangeStart={this.handleChangeStart.bind(this)}
              handleChangeEnd={this.handleChangeEnd.bind(this)}
            />
          </div>
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
            {isOpen ? <SvgUp /> : <SvgDown />}
          </div>

          {isOpen ? (
            <div>
              <Adults
                adults={adults}
                addOne={() => {
                  _that.addOne("adults");
                }}
                minusOne={() => {
                  _that.minusOne("adults");
                }}
              />
              <Children
                children={children}
                addOne={() => {
                  _that.addOne("children");
                }}
                minusOne={() => {
                  _that.minusOne("children");
                }}
              />
              <Infants
                infants={infants}
                addOne={() => {
                  _that.addOne("infants");
                }}
                minusOne={() => {
                  _that.minusOne("infants");
                }}
              />
            </div>
          ) : (
            <TotelBill
              amount={amount}
              night={night}
              serviceFee={serviceFee}
              totalAmount={totalAmount}
            />
          )}

          <Divider />

          <BookModal />
        </Card.Content>
        <Card.Content extra>You won’t be charged yet</Card.Content>
      </Card>
    );
  }
}
// Dates component
const Dates = props => (
  <div style={{ display: "flex" }}>
    <DatePicker
      isClearable={true}
      selected={props.startDate}
      selectsStart
      startDate={props.startDate}
      endDate={props.endDate}
      onChange={props.handleChangeStart}
      minDate={moment()}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      placeholderText="Check IN"
      name="arrival_date"
      autoComplete="off"
    />
    <div>
      <ArroSin />
    </div>
    <DatePicker
      isClearable={true}
      selected={props.endDate}
      selectsEnd
      startDate={props.startDate}
      endDate={props.endDate}
      onChange={props.handleChangeEnd}
      minDate={moment()}
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      placeholderText="Check OUT"
      name="departure_date"
      autoComplete="off"
    />
  </div>
);
const ArroSin = () => (
  <svg
    viewBox="0 0 24 24"
    role="presentation"
    aria-hidden="true"
    focusable="false"
    style={{
      height: "24px",
      width: "24px",
      display: "block",
      fill: "currentcolor"
    }}
  >
    <path
      d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z"
      fillRule="evenodd"
    />
  </svg>
);
const SvgDown = props => (
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
const SvgUp = props => (
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
        d="m1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z"
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

const TotelBill = props => (
  <div>
    <p
      style={{
        padding: "7px",
        width: "60%"
      }}
    >
      {props.amount} x {props.night} nights <b>{props.amount * props.night}</b>
    </p>
    <Divider />
    <p
      style={{
        padding: "5px",
        width: "60%"
      }}
    >
      Service fee: <b>{props.serviceFee}</b>
    </p>
    <Divider />
    <p
      style={{
        padding: "8px",
        width: "60%"
      }}
    >
      Total: {props.totalAmount}
    </p>
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
