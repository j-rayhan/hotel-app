import React from 'react'
import { Button, Header, Image, Modal,Input } from 'semantic-ui-react'

const ModalModalExample = () => (
  <Modal trigger={<Input 
    label={{ icon: 'asterisk' }} 
    labelPosition='left corner' 
    placeholder='Advanced Search...' 
    />}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src='https://zpalace.gr/wp-content/uploads/4yotla4phco.jpg' />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>We've found the following gravatar image associated with your e-mail address.</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default ModalModalExample