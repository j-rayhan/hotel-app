// @flow
import React from 'react'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

const ADD_HOUSE = gql`

    mutation addHouse($name: String!, $email: String! ){
        addHouse(name: $name, email: $email ) @client {
            id
        }
    }

`;

const AddHouse = (props) => (
    <Mutation mutation={ADD_HOUSE}>
        {addHouse => {
            let name , email;
            return (
                <div>
                    <form
                        onSubmit = { e => {
                            e.preventDefault();
                            addHouse ( {
                                variables: {
                                    name: name.value,
                                    email: email.value
                                }
                            });
                            props.history.push('/houses');
                        }}
                        >
                        Name: <input ref={v => {name = v } } />
                        Email: <input ref={v => {email = v } } />
                        <button type="submit"> Add House </button>
                    </form>
                </div>
            )
        }}
    </Mutation>
);

export default AddHouse;