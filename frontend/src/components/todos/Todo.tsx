import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '../navbar/Navbar';
import './todostyle.css';
import { getTodoList } from '../../services/api';
import TodoCard from './card/TodoCard';
import Modal from './modal/Modal';

function Todo() {
  const navigation = useNavigate();

  const [todoList, setTodoList] = useState([]);

  async function getList() {
    const result = await getTodoList();
    setTodoList(result.data.reverse());
  }
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (!user) {
      navigation('/login');
    }
    getList();
  }, []);

  const filterCompleted = async () => {
    // const value = {isCompleted: true};
    // getList(value);
  }
  const filterPending = async () => {
    // const value = {isCompleted: false};
    // getList(value);
  }
  const filterPriority = async () => {
    // const value = {priority: true};
    // getList(value);
  }
  const filterOverDue = async () => {
    // const value = {priority: true};
    // getList(value);
  }

  console.log('todo', todoList.data);

  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  }

  return (
    <>
      <Navbar />
      <div>
        <button onClick={getList}>All</button>
        <button onClick={filterCompleted}>Completed</button>
        <button onClick={filterPending}> Pending </button>
        <button onClick={filterPriority}>Priority</button>
        <button onClick={filterOverDue}> Over Due</button>

      </div>

      {todoList && todoList.map((todo) => <TodoCard key={todo._id} data={todo} />)}

      <div className="model-btn">
        <button type="button" className="openModalBtn" onClick={handleModal}>
          ADD
        </button>
        {modalOpen && <Modal state={true} data={'Anand'} task={'add'} />}
      </div>
    </>
  );
}

export default Todo;
