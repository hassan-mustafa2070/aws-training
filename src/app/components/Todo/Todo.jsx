import { deleteTodo } from "@/graphql/mutations";
import styles from "./todo.module.css";
import { generateClient } from "aws-amplify/api";
const client = generateClient();

const Todo = ({ todo, todoList, setTodoList }) => {

  async function DeleteTodo(id) {
    try {
      await client.graphql({
        query: deleteTodo,
        variables: {
          input: { id },
        },
      });
      const filteredTodo = todoList.filter((todo) => todo?.id !== id);
      setTodoList(filteredTodo);
    } catch (err) {
      console.log("error creating todo:", err);
    }
  }
  
  return (
    <div className={styles.todo}>
      <div className={styles.titleanddescription}>
        <span>{todo?.title}</span>
        <p>{todo?.description}</p>
      </div>
      <button onClick={() => DeleteTodo(todo?.id)}>Delete</button>
    </div>
  );
};

export default Todo;
