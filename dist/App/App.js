import React from "../../_snowpack/pkg/react.js";
import {Heading, IconButton, useColorMode, VStack} from "../../_snowpack/pkg/@chakra-ui/react.js";
import {FaSun, FaMoon} from "../../_snowpack/pkg/react-icons/fa.js";
import AddTodo from "../components/AddTodo.js";
import TodoList from "../components/TodoList.js";
const App = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  return /* @__PURE__ */ React.createElement(VStack, {
    p: 4
  }, /* @__PURE__ */ React.createElement(IconButton, {
    icon: colorMode === "light" ? /* @__PURE__ */ React.createElement(FaSun, null) : /* @__PURE__ */ React.createElement(FaMoon, null),
    isRound: "true",
    size: "lg",
    alignSelf: "flex-end",
    onClick: () => {
      toggleColorMode();
    }
  }), /* @__PURE__ */ React.createElement(Heading, {
    fontWeight: "extrabold",
    size: "2xl",
    bgClip: "text",
    bgGradient: "linear(to-r,pink.400,pink.200,blue.500)"
  }, "Todo Application"), /* @__PURE__ */ React.createElement(TodoList, null), /* @__PURE__ */ React.createElement(AddTodo, null));
};
export default App;
