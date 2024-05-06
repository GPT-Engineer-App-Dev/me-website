import { Container, VStack, Heading, Text, Button, Image, Link } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={8} align="center">
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTQ5OTY0ODV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Profile Image" />
        <Heading as="h1" size="xl">
          John Doe
        </Heading>
        <Text fontSize="md" color="gray.500">
          Software Developer | Tech Enthusiast | Blogger
        </Text>
        <Text fontSize="lg" textAlign="center">
          I'm a passionate software developer with a love for building scalable web applications and engaging user experiences.
        </Text>
        <VStack spacing={4}>
          <Button leftIcon={<FaGithub />} colorScheme="teal" variant="solid">
            <Link href="https://github.com" isExternal>
              GitHub
            </Link>
          </Button>
          <Button leftIcon={<FaLinkedin />} colorScheme="blue" variant="solid">
            <Link href="https://linkedin.com" isExternal>
              LinkedIn
            </Link>
          </Button>
          <Button leftIcon={<FaEnvelope />} colorScheme="red" variant="solid">
            <Link href="mailto:john.doe@example.com">Email Me</Link>
          </Button>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
