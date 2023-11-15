// TodoForm.tsx
import React, { useState } from 'react';
import { addTodo } from '../../services/api';

// interface TodoFormProps {
//   addTodo: (todo: any) => void;
// }

function TodoForm() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [taskType, setTaskType] = useState('Official');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Validation and further processing can be added here
    const newTodo = {
      id: '',
      title,
      description,
      dueDate,
      taskType,
      priority,
    };
    // implement try catch
    const result = addTodo(newTodo);
    console.log(result);

    // Clear the form fields
    setTitle('');
    setDescription('');
    setTaskType('Official');
    setDueDate('');
    setPriority(false);
  };

  const handleDateChange = (e) => {
    // Update the state with the selected date
    const selectedDate = e.target.value;
    const isoDate = new Date(selectedDate).toISOString();
    setDueDate(isoDate);
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <label htmlFor="title">
        Title
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      {/* Repeat the pattern for other form elements */}
      <label htmlFor="description">
        Description
        <textarea
          id="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <br />
      <label htmlFor="taskType">
        Task Type
        <select
          id="taskType"
          value={taskType}
          onChange={(e) => setTaskType(e.target.value)}
        >
          <option value="Official">Official</option>
          <option value="Personal">Personal</option>
          <option value="Hobby">Hobby</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <label htmlFor="dueDate">
        Due Date
        <input
          type="date"
          id="dueDate"
          placeholder="Due Date"
          value={dueDate}
          onChange={handleDateChange}
        />
      </label>
      <br />
      <label htmlFor="priority">
        Priority
        <input
          type="checkbox"
          id="priority"
          checked={priority}
          onChange={() => setPriority(!priority)}
        />
      </label>
      <br />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
