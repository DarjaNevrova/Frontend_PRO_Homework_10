import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteAction } from "../../store/reducer/accountReducer";
import style from './style.module.css'

export default function Remove({ id }) {
  const dispatch = useDispatch();

  return (
    <div>
      <button className={style.deleteButton} onClick={() => dispatch(deleteAction(id))}>Click here to delete the task</button>
    </div>
  )
}


