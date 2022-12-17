import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Img,
  Input,
  Text,
} from "@chakra-ui/react";
import {Link} from "react-router-dom";
import React from "react";
import blogLogo from "../assets/blog-logo.png";

const Login = () => {
  return (
    <Container h={"100vh"} bg={"gray.100"} maxW={"container.xl"} p={16}>
      <Container h={"70vh"} bg={"white"}>
        <Box p={"3rem"}>
          <Img src={blogLogo} m={"auto"} h={"80px"}/>
        </Box>
        <FormControl h={"60vh"} p={"1rem"}>
          <Box m={"1rem 0"}>
            <FormLabel>Email</FormLabel>
            <Input type={"email"} placeholder={"Enter email.."} />
          </Box>
          <Box m={"1rem 0"}>
            <FormLabel>Password</FormLabel>
            <Input type={"password"} placeholder={"Enter password.."} />
          </Box>
          <Text>
            <Link to="/forgetPassword">Forget password?</Link>
          </Text>
          <Button
            m={"1rem 0"}
            variant={"outline"}
            colorScheme={"orange"}
            w={"full"}
          >
            Login
          </Button>
          <Text textAlign={"right"}>New User?</Text>
          <Button
            m={"1rem 0"}
            variant={"ghost"}
            colorScheme={"orange"}
            w={"full"}
          >
            <Link to={"/signup"}>Signup</Link>
          </Button>
        </FormControl>
      </Container>
    </Container>
  );
};

export default Login;
