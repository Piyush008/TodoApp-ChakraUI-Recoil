import {
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";
import { useRecoilState } from "recoil";
import todoListAtom from "./../Recoil/Todo";

const TodoList = () => {
  const [todos, setTodoListState] = useRecoilState(todoListAtom);

  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const deleteFromTodoList = (index) => {
    const todoList = [...todos];
    todoList.splice(index, 1);
    setTodoListState(todoList);
  };

  return (
    todos.length > 0 && (
      <VStack
        marginTop="24px !important"
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="medium"
        borderRadius="md"
        padding="2"
        width="100%"
        alignItems="stretch"
        maxWidth={{ base: "90vw", sm: "80vw", lg: "50vw" }}
      >
        {todos.map((todo, i) => (
          <HStack key={i}>
            <Text>{todo.body}</Text>
            <Spacer />
            <IconButton
              onClick={() => deleteFromTodoList(i)}
              icon={<FaTrash />}
              size="sm"
              isRound="true"
            />
          </HStack>
        ))}
      </VStack>
    )
  );
};

export default TodoList;
