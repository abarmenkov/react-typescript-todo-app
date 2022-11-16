import React from 'react';
import styles from './Todos.module.css';

interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode
}

export default function List<T>(props: ListProps<T>) {

    return (
        <div className={styles.task__list}>
            {props.items.map(props.renderItem)}
        </div>
    )
}
