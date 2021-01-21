//=============================================================================
// Form Component
//=============================================================================

// eslint-disable-next-line
import React, {useState} from "react";
import { FormElement, Header, FormBody, Input, Select, SubscriptionWrapper, SubCheckbox, Disclaimer, RegisterButton } from "./FormElement";
import CountrySelector from './CountrySelector'


const FormWrapper = () => {
  return (
    <>
      <FormElement>
        <Header>register now</Header>
        <FormBody>
          <Input type="text" placeholder="First Name*" required/>
          <Input type="text" placeholder="Last Name*" required/>
          <Input type="text" placeholder="Email*" required/>
          <CountrySelector/>
          <Input type="text" placeholder="Job Title"/>
          <Input type="text" placeholder="Company Name"/>
            <Select>
                <option value="" selected disabled>What Best Describes You?</option>
                <option value="entrepreneur">Entrepreneur</option>
                <option value="small-business">Small Business Owner</option>
                <option value="investor">Investor</option>
                <option value="tech-enthusiast">Tech Enthusiast</option>
                <option value="other">Other</option>
            </Select>
        <SubscriptionWrapper>
            <SubCheckbox type="checkbox" value="subscribe"/>
            <Disclaimer>Yes, I would like to subscribe to stay connected to the latest Mobileye technologies and industry trends by email and telephone. I can unsubscribe at any time.</Disclaimer>
        </SubscriptionWrapper>
        <RegisterButton href="/">register now</RegisterButton>
        </FormBody>
      </FormElement>
    </>
  );
};

export default FormWrapper;
