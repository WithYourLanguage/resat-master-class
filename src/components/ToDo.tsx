import { IToDo } from "../atoms";

function ToDo({ text }: IToDo) {
  return (
    <li>
      <span>{text}</span> <button>To Do</button>
      <button>Dne</button>
      <button>Doing</button>
    </li>
  );
}

export default ToDo;
