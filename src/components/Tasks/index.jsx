import { useDispatch, useSelector } from 'react-redux';
import { addAction } from '../../store/reducer/accountReducer';
import React, { useState } from 'react';
import Remove from '../Remove';
import style from './style.module.css'

const Tasks = () => {
    const tasks = useSelector(state => state.account.tasks);
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        const task = { id: Date.now(), title };
        dispatch(addAction(task));
        setTitle('');
    };

    return (
        <div>
            <form className={style.form} onSubmit={handleSubmit}>
                <input type="text" name="title" placeholder="Please, enter your task" value={title} onChange={e => setTitle(e.target.value)} />
                <button className={style.button} type="submit">Add</button>
            </form>
                {
                    tasks.map(task => (
                    <div className={style.container} key={task.id}>
                        <p className={style.title}>{task.title}</p>
                        <Remove id={task.id} product={task} />
                    </div>
                ))}
        </div>
    );
};

export default Tasks;