import styles from './taskCard.module.css';


const TaskCard = ({ text, handleDelete }) => {
  return (

    <div className={styles.todoItem}>
      <p>{text}</p>
      <button onClick={handleDelete}>X</button>
    </div>
 
  );
};

export default TaskCard;