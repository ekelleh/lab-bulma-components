import React from 'react';
import Navbar from './Navbar'
import FormField from './FormField'
import CoolButton from './CoolButton'

class Signup extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />

        <form action="">
          <FormField label="Name" type="text" placeholder="e.g Alex Smith" />
          <FormField label="Email" type="email" placeholder="e.g. alexsmith@gmail.com" />
          <FormField label="Password" type="password" />

          <CoolButton isSmall isSuccess>Submit</CoolButton>
        </form>

      </React.Fragment>
    )
  }
}


export default Signup; 