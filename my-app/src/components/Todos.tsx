import React, { useState, ChangeEvent, useRef, useEffect, FC } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styles from './Todos.module.css';
import { TodoItem } from './TodoItem';
import axios from 'axios';
import List from './List';

export const Todos: FC = () => {
    const [task, setTask] = useState<string>("")
    const [todoList, setTodoList] = useState<ITask[]>([]);
    const inputRef: any = useRef();

    useEffect(() => {
       fetchData();
    }, [])

    const fetchData = async () => {
      try {
        const tasks = await axios.get<ITask[]>('http://jsonplaceholder.typicode.com/todos?_limit=5');
        setTodoList(tasks.data);
      } catch (e) {
        console.log(e);
      }
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }

    const handleSubmitTask = (): void => {
        setTodoList([...todoList, { title: task, completed: false, id: uuidv4(), userId: uuidv4()}]);
        setTask("");
        inputRef.current.focus();
    }

    const removeTask = (task: ITask): void => {
        setTodoList(todoList => todoList.filter(item => item.id !== task.id))
    }

    const markDone = (task: ITask): void => {
        const newArr = todoList.map(item => item.id === task.id ? { ...item, completed: !item.completed } : item)
        setTodoList(newArr)
    }

    return (
        <div className={styles.todo}>
            <div className={styles.todo__addButton}>
                <input ref={inputRef} autoFocus type="text" placeholder="ADD TODO" onChange={handleInputChange} value={task} className={styles.todo__input} />
                <button onClick={handleSubmitTask} className="submit-button">Add Todo</button>
            </div>
            <List items={todoList}
            renderItem={(todo: ITask) => <TodoItem task={todo} key={todo.id} markDone={markDone} removeTask={removeTask}
            />}
            />
        </div>
    )
}
