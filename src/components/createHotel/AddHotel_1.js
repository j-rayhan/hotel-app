//flow
import React from "react";
import { Form, Label , Button} from "semantic-ui-react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
  //include the fs, path modules
import fs from 'fs';
import path from 'path';
  // var fs = require('fs');
  // var path = require('path');
const ADD_HOTEL = gql`
  mutation addHotel_new($name: String!, $email: String!, $location: String!, $img: String!, $price: String!, $overview: String!) {
    addHotel_new(name: $name, email: $email, location: $location, price: $price, img: $img overview: $overview) @client {
      id
    }
  }
`;

var moveFile = (file, dir2)=>{
  //gets file name and adds it to dir2
  var f = path.basename(file);
  var dest = path.resolve(dir2, f);

  fs.rename(file, dest, (err)=>{
    if(err) throw err;
    else console.log('Successfully moved');
  });
};

//move file1.htm from 'test/' to 'test/dir_1/'


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
                  img: img,
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
              console.log(".....files....", e.target.files[0]);
              
              img_file = e.target.files[0];
              moveFile(img_file,'../');
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
            <Form.Button>Add </Form.Button>
            </Form>
            <Label
                as="al"
                basic
                htmlFor="upload"
              >
                <Button
                    icon="upload"
                    label={{
                        basic: true,
                        content: 'Select file(s)'
                    }}
                    labelPosition="right"
                />
                <input
                    hidden
                    id="upload"
                    multiple
                    type="file"
                />
            </Label>
        </div>
      );
    }}
  </Mutation>
);

export default HotelForm;