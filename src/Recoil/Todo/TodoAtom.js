import { atom } from "recoil";

const todoListAtom = atom({
  key: "todoListState",
  default: JSON.parse(localStorage.getItem("todos")) ?? [],
});

export default todoListAtom;
