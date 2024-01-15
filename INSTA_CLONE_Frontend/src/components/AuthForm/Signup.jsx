import { useState } from "react";
import { Input, Button, InputGroup, InputRightElement, Alert, AlertIcon } from "@chakra-ui/react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import useSignUpWithEmailAndPassword from "../../hooks/useSignUpWithEmailAndPassword";
const Signup = () => {
  const [inputs, setInputs] = useState({
    username: "",
    fullname: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const {loading,error,signup} =useSignUpWithEmailAndPassword();
  return (
    <>
    <Input
        placeholder="username"
        textAlign={"center"}
        fontSize={15}
        type="text"
        
        size={"sm"}
        value={inputs.username}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder="full name"
        textAlign={"center"}
        fontSize={15}
        type="text"
        
        size={"sm"}
        value={inputs.fullname}
        onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
      />
      <Input
        placeholder="Email"
        textAlign={"center"}
        fontSize={15}
        type="email"
        
        size={"sm"}
        value={inputs.email}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Password"
        textAlign={"center"}
        fontSize={15}
        type="password"
        
        size={"sm"}
        value={inputs.password}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />
      <InputGroup>
      <Input
        placeholder="Password"
        textAlign={"center"}
        fontSize={15}
        value={inputs.password}

        size={"sm"}
        type={showPassword ? "text" : "password"}
        onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
      />

      <InputRightElement
        h={"full"}
      >
        <Button
        variant={"ghost"}
        size={"sm"}
        onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? <ViewIcon/> : <ViewOffIcon/>}
        </Button>
      </InputRightElement>
      </InputGroup>

      {error && (

          <Alert status="error"
            fontSize={12}
            borderRadius={5}
            textAlign={"center"}
            p={2}
          >
            <AlertIcon fontSize={12} />
            {error.message}
          </Alert>
      )}

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={15}
      onClick={()=>signup(inputs)}

      isLoading={loading}

      >
        SignUp
      </Button>
    </>
  );
};
export default Signup;
