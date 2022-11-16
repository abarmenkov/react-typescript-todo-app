/* interface Todo {
    text: string;
    complete: boolean;
  }
 
type ToggleTodo = (selectedTodo: Todo) => void;

type AddTodo = (text: string) => void; */
interface ITask {
  title: string;
  completed: boolean;
  id: string;
  userId: string;
}
