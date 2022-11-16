import { ImCross, ImCheckmark } from 'react-icons/im';
import styles from './TodoItem.module.css';

interface Props {
    task: ITask;
    markDone(taskToDelete: ITask): void;
    removeTask(taskToDelete: ITask): void;
}

export const TodoItem = ({ task, markDone, removeTask }: Props) => {


    return (
        <div className={task.completed ? styles.todoItem_done : styles.todoItem}>
            <div>
                <span
                    onClick={() => markDone(task)}
                    className={task.completed ? styles.toDo_done : styles.toDo}
                >{task.title}</span>
            </div>
            <div style={{display: "flex"}}>
                <span onClick={() => markDone(task)} className={styles.todoItem__action}>
                    <ImCheckmark />
                </span>
                <span onClick={() => removeTask(task)} className={styles.todoItem__action}>
                    <ImCross />
                </span>
            </div>
        </div>
    )
}