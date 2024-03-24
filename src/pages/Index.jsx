import React from "react";
import { Box, Heading, Text, VStack, HStack, Image, Container, Button, SimpleGrid, Link } from "@chakra-ui/react";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Box bg="blue.500" py={8}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" color="white" mb={4}>
            X-Group Transport
          </Heading>
          <Text fontSize="xl" color="white">
            Reliable Commercial Vehicle Rentals for Your Business Needs
          </Text>
        </Container>
      </Box>

      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About Us
            </Heading>
            <Text fontSize="lg">X-Group Transport is a leading provider of commercial vehicle rentals for larger companies. With our extensive fleet of well-maintained vehicles, we cater to the transportation needs of businesses across various industries. Our commitment to excellence and customer satisfaction has earned us the trust of renowned companies such as Nutrien, BHP, and Cameco.</Text>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Our Fleet
            </Heading>
            <SimpleGrid columns={[1, 2, 4]} spacing={8}>
              <Box>
                <Image src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxSYW0lMjBjb21tZXJjaWFsJTIwdHJ1Y2t8ZW58MHx8fHwxNzExMjk5NTQwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Ram" />
                <Text fontSize="lg" mt={2}>
                  Ram
                </Text>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1700887945472-4d6e059c8b06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxGb3JkJTIwY29tbWVyY2lhbCUyMHRydWNrfGVufDB8fHx8MTcxMTI5OTU0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Ford" />
                <Text fontSize="lg" mt={2}>
                  Ford
                </Text>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxDaGV2eSUyMGNvbW1lcmNpYWwlMjB0cnVja3xlbnwwfHx8fDE3MTEyOTk1NDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Chevy" />
                <Text fontSize="lg" mt={2}>
                  Chevy
                </Text>
              </Box>
              <Box>
                <Image src="https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHTUMlMjBjb21tZXJjaWFsJTIwdHJ1Y2t8ZW58MHx8fHwxNzExMjk5NTQxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="GMC" />
                <Text fontSize="lg" mt={2}>
                  GMC
                </Text>
              </Box>
            </SimpleGrid>
          </Box>

          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Contact Us
            </Heading>
            <Text fontSize="lg" mb={4}>
              For vehicle rentals and inquiries, please contact us:
            </Text>
            <HStack spacing={4}>
              <Link href="tel:+1234567890">
                <Button leftIcon={<FaPhone />} colorScheme="blue" size="lg">
                  (123) 456-7890
                </Button>
              </Link>
              <Link href="mailto:info@xgrouptransport.com">
                <Button leftIcon={<FaEnvelope />} colorScheme="blue" size="lg">
                  info@xgrouptransport.com
                </Button>
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
