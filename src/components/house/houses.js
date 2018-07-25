//@flow
import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const GET_HOUSES = gql`
{
    houses @client {
        id
        name
        email
    }
}
`;

const Houses = () => (
    <Query query={GET_HOUSES}>
    {({ data : { houses } }) => (
        <ul>
            {houses.map(house => (
                <li key={house.id}>
                House Name: {house.name} >> Email: {house.email}
                </li>
            ))}
        </ul>
    )}
    </Query>
);
export default Houses;