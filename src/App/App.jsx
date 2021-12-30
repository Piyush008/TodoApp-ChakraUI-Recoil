import { Heading, IconButton, useColorMode, VStack } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={() => {
          toggleColorMode();
        }}
      />
      <Heading
        fontWeight="extrabold"
        size="2xl"
        bgClip="text"
        bgGradient="linear(to-r,pink.400,pink.200,blue.500)"
      >
        Todo Application
      </Heading>
      <TodoList />
      <AddTodo />
    </VStack>
  );
};

export default App;
