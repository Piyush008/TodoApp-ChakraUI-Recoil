import { Button, HStack, Input, useToast } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import todoListAtom from "../Recoil/Todo";

const AddTodo = () => {
  const inputRef = React.useRef();
  const toast = useToast();
  const [todos, setTodoListState] = useRecoilState(todoListAtom);

  const addToTodoList = (body) => {
    if (!/^\s*$/.test(body)) setTodoListState([...todos, { body }]);
    else
      toast({
        title: "Todo title can't be empty",
        status: "error",
        duration: 1500,
        isClosable: true,
      });
  };

  const handleSubmit = () => {
    addToTodoList(inputRef.current.value);
    inputRef.current.value = "";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <HStack marginTop="8">
      <Input
        onKeyDown={handleKeyDown}
        ref={inputRef}
        variant="filled"
        placeholder="Title for todo..."
      />
      <Button onClick={handleSubmit} colorScheme="pink" paddingX="8">
        Add Todo
      </Button>
    </HStack>
  );
};

export default AddTodo;
