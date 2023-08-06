import { Heading, HStack, Image, Text, VStack, Divider, CardBody, CardFooter, Stack, ButtonGroup, Button, Box} from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsSection from "./ProjectSection";

const Card = ({ title, description, imageSrc }) => {
return (
  <VStack backgroundColor={"white"} p={0} rounded="md" color="black">
  <Image src={imageSrc}  rounded="md"></Image>
  <VStack p={3} align={"left"} paddingTop={0} >
  <Heading as="h3" fontSize="3xl" textAlign={"start"}>
    {title}
  </Heading>
    <Text p={1}>{description}</Text>
  </VStack>
  <HStack alignSelf={"start"} p={2}>
    <Text align={"left"}>Read More</Text>
    <FontAwesomeIcon icon={faArrowRight} size="1x" />
  </HStack>
</VStack>
);
};
  
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.

export default Card;
