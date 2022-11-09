import React, { useRef, useState } from 'react';

interface Props {
    addTodo: AddTodo;
  }
  
  export const AddTodoForm: React.FC<Props> = ({ addTodo }) => {
    const [text, setText] = useState('');
    const refInput: any = useRef();
    return (
      <form>
        <input 
        type="text"
        ref={refInput}
        placeholder='add todo'
        value={text}
        onChange={e => setText(e.target.value)} />
        <button 
        type="submit"
        onClick={(e) => {
            e.preventDefault();
            addTodo(text);
            setText('');
            refInput.current.focus();
        }}
        
        >Add Todo</button>
      </form>
    );
  };