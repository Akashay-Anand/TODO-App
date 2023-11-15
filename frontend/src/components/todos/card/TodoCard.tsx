// import React from 'react';
import { addTodo, deleteTodo, toggleState } from '../../../services/api';
import './TodoCard.css';
import moment from 'moment';

function TodoCard({data}) {
  console.log("Card",data);

  const handleStateChange = async () => {
    // toggleState(data._id);
    // const newTodo = {
    //   id: '',
    //   title: "rahul 05",
    //   description: "dmlrisom",
    //   taskType: "Official",
    //   priority: false,
    // };
    // const result = addTodo(newTodo);
    const result = await toggleState(data._id);
  }

  const handleDelete = async () => {
    const result = await deleteTodo(data);
    console.log(result);
  }

  return (
    <div>
      <div className="cardContainer">
        <div>
          <h2>Title: {data.title}</h2>
          <h4>Description:  {data.description} </h4>
          <p> Task Type: {data.taskType}</p>
          <p> Priority: {data.priority.toString()}</p>
          <p> Priority: {data.priority.toString()}</p>
          <p> Due Date: {moment( data.dueDate).fromNow()}</p>
          <p>Date Created: {moment(data.dateCreated).fromNow()}</p>
          <p>is Completed: {data.isCompleted.toString()}</p>
        </div>
        <div>
          <button type="button" onClick={handleStateChange}>State</button>
          <button type="button">Edit</button>
          <button type="button" onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
