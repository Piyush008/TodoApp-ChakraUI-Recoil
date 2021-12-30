import { atom } from "../../../_snowpack/pkg/recoil.js";

const todoListAtom = atom({
  key: "todoListState",
  default: JSON.parse(localStorage.getItem("todos")) ?? [],
});

export default todoListAtom;
