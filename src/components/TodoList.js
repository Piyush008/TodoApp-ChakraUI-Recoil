import React from "../../_snowpack/pkg/react.js";
import {
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack
} from "../../_snowpack/pkg/@chakra-ui/react.js";
import {FaTrash} from "../../_snowpack/pkg/react-icons/fa.js";
import {useRecoilState} from "../../_snowpack/pkg/recoil.js";
import todoListAtom from "../Recoil/Todo/index.js";
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
  return todos.length > 0 && /* @__PURE__ */ React.createElement(VStack, {
    marginTop: "24px !important",
    divider: /* @__PURE__ */ React.createElement(StackDivider, null),
    borderColor: "gray.100",
    borderWidth: "medium",
    borderRadius: "md",
    padding: "2",
    width: "100%",
    alignItems: "stretch",
    maxWidth: {base: "90vw", sm: "80vw", lg: "50vw"}
  }, todos.map((todo, i) => /* @__PURE__ */ React.createElement(HStack, {
    key: i
  }, /* @__PURE__ */ React.createElement(Text, null, todo.body), /* @__PURE__ */ React.createElement(Spacer, null), /* @__PURE__ */ React.createElement(IconButton, {
    onClick: () => deleteFromTodoList(i),
    icon: /* @__PURE__ */ React.createElement(FaTrash, null),
    size: "sm",
    isRound: "true"
  }))));
};
export default TodoList;
