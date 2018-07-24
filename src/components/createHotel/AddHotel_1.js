//flow
import React from "react";
import { Form, Label , Button} from "semantic-ui-react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const ADD_HOTEL = gql`
  mutation addHotel_new($name: String!, $email: String!, $location: String!, $img: String!, $price: String!, $overview: String!) {
    addHotel_new(name: $name, email: $email, location: $location, price: $price, img: $img overview: $overview) @client {
      id
    }
  }
`;



const HotelForm = (props) => (
  <Mutation mutation={ADD_HOTEL}>
    {addHotel => {
      let name, email, location, price, img, overview ,img_file;
      return (
        <div>
          <Form
            onSubmit={e => {
              e.preventDefault();
              addHotel({
                variables: {
                  name: name,
                  email: email,
                  location: location,
                  price: price,
                  img: img_file,
                  overview: overview
                }
              });
                props.history.push("/hotels");
            }}
          >
          <Form.Group widths="equal">
          <Form.Input
            label="Name"
            placeholder="Hotel name"
            name="name"
            autoComplete="off"
            onChange={e => {
              name = e.target.value
            }}
          />          
           <Form.Input
            icon="at"
            iconPosition="left"
            label="Email "
            placeholder="Email"
            name="email"
            onChange={e => {
              email = e.target.value
            }}
            autoComplete="off"
            
          />
          </Form.Group>
          <Form.Group widths="equal">
          <Form.Input
            label="Location"
            placeholder="Hotel Location"
            name="location"
            autoComplete="off"
            onChange={e => {
              location = e.target.value
            }}
          />          
           <Form.Input
            icon="x"
            iconPosition="left"
            label="Price "
            placeholder="Price"
            name="price"
            onChange={e => {
              price = e.target.value
            }}
            autoComplete="off"
            
          />
          <Form.Input 
          label="Upload File" 
          type="file" 
            name="img_file"
            onChange={e => {
              let fileToLoad = e.target.files[0];
              let fileReader = new FileReader();
              // console.log("fileToLoad", fileToLoad);

              fileReader.onload = function(fileLoadedEvent) {
                let srcData = fileLoadedEvent.target.result; // <--- data: base64
                // console.log(srcData);
                img_file = srcData;
              }
              fileReader.readAsDataURL(fileToLoad);
            }}
            />
          </Form.Group>
          <Form.TextArea
          label="Overview"
          placeholder="Tell us more about you..."
          name="overview"
          autoComplete="off"
          onChange={e => {
            overview = e.target.value
          }}
        />
            <Form.Button positive>Add </Form.Button>
            </Form>
        </div>
      );
    }}
  </Mutation>
);

export default HotelForm;