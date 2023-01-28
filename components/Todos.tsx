import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
  Badge,
} from "@chakra-ui/react";
import { useState } from "react";

type ForgotPasswordFormInputs = {
  email: string;
};

export default function Todos(): JSX.Element {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const handleAdd = () => {
    setTodos([...todos, { id: Date.now(), title: title, completed: false }]);
    setTitle("");
  };
  const handleToggle = (id) => {
    let newTodoList = todos.filter((todo) => {
      if ((todo.id = id)) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodoList);
  };
  const handleClear = () => {
    let newTodoList = todos.filter((todo) => {
      if (!todo.completed) return todo;
    });
    setTodos(newTodoList);
  };
  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack
        spacing={4}
        w={"full"}
        maxW={"md"}
        bg={useColorModeValue("white", "gray.700")}
        rounded={"xl"}
        boxShadow={"lg"}
        p={6}
        my={12}
      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
          Todo App {todos.length}
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          Create Todo Here
        </Text>
        <FormControl id="email">
          <Input
            placeholder="Enter Todo"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => {
              handleAdd();
            }}
            disabled={title.length == 0}
          >
            Add Todo
          </Button>
        </Stack>
        <Stack>
          <ul>
            {todos.map((todo) => (
              <li style={{ margin: "5px" }}>
                <Badge colorScheme={todo.completed ? "green" : "red"}>
                  {todo.title}- {todo.completed ? "Completed" : "Incomplete"}
                </Badge>
                <Button
                  marginX={"5"}
                  size={"sm"}
                  onClick={() => {
                    handleToggle(todo.id);
                  }}
                >
                  Toggle
                </Button>
              </li>
            ))}
          </ul>
          <Button
            onClick={() => {
              handleClear();
            }}
          >
            Clear All Completed
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
