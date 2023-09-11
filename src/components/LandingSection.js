import React from 'react'
import { Avatar, Heading, VStack } from '@chakra-ui/react'
import FullScreenSection from './FullScreenSection'

const greeting = 'Hello, I am Ron!'
const bio1 = 'A frontend developer'
const bio2 = 'specialised in React'

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack direction="row" margin="50px">
      <Avatar
        size="xl"
        name="Ron"
        src="https://img.favpng.com/16/2/3/koala-bear-clip-art-png-favpng-e9SK7y5GVZm012JrLSbkRVZ71.jpg"
      />
      <Heading as="h1" size="xs">
        {greeting}
      </Heading>
    </VStack>
    <Heading>{bio1}</Heading>
    <Heading>{bio2}</Heading>
  </FullScreenSection>
)

export default LandingSection
