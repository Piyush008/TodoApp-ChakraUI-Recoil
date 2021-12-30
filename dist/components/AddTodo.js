import React from "../../_snowpack/pkg/react.js";
import {Button, HStack, Input, useToast} from "../../_snowpack/pkg/@chakra-ui/react.js";
import {useRecoilState} from "../../_snowpack/pkg/recoil.js";
import todoListAtom from "../Recoil/Todo/index.js";
const AddTodo = () => {
  const inputRef = React.useRef();
  const toast = useToast();
  const [todos, setTodoListState] = useRecoilState(todoListAtom);
  const addToTodoList = (body) => {
    if (!/^\s*$/.test(body))
      setTodoListState([...todos, {body}]);
    else
      toast({
        title: "Todo title can't be empty",
        status: "error",
        duration: 1500,
        isClosable: true
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
  return /* @__PURE__ */ React.createElement(HStack, {
    marginTop: "8"
  }, /* @__PURE__ */ React.createElement(Input, {
    onKeyDown: handleKeyDown,
    ref: inputRef,
    variant: "filled",
    placeholder: "Title for todo..."
  }), /* @__PURE__ */ React.createElement(Button, {
    onClick: handleSubmit,
    colorScheme: "pink",
    paddingX: "8"
  }, "Add Todo"));
};
export default AddTodo;
