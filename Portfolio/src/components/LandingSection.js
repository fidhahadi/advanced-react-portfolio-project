import React from "react";
import { Avatar, Heading, VStack, Wrap, WrapItem } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";

const greeting = "Hello, I am Fidha!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";


// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
  <Wrap>
  <WrapItem>
  <Avatar size='2xl' name='Fidha Rafeeque' src='https://scontent.ffjr1-4.fna.fbcdn.net/v/t1.6435-9/84637257_2629179974013297_5433872548498505728_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=K1nzpr47rwQAX_0ScJQ&_nc_ht=scontent.ffjr1-4.fna&oh=00_AfBRA1fJ1C_5Jkaza4ORa0BoYGK6MH6Yvwa_ktojZOxEHg&oe=64F578BA' />
  </WrapItem>
</Wrap>
<VStack>
<Heading as='h4' size='l' noOfLines={2}>
    {greeting}
  </Heading><br></br>
  <Heading as='h1' size='xl' noOfLines={2}>
   {bio1}<br></br>
    {bio2}
  </Heading>
  </VStack> 


  </FullScreenSection>
);

export default LandingSection;
