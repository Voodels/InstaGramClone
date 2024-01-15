import { Input,Button } from "@chakra-ui/react"
import { useState } from "react";

const Login = () => {

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
      });
  return (
    <>
    <Input
            placeholder="Email"
            textAlign={"center"}
            fontSize={15}
            type="email"
            size={"sm"}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
    <Input
            placeholder="Password"
            textAlign={"center"}
            fontSize={15}
            type="code"
            size={"sm"}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />

        <Button
            w={"full"}
            colorScheme="blue"
            size={"sm"}
            fontSize={15}
          >
            Login
          </Button>


    </>
  )
}
export default Login