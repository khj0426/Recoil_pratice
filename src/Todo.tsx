import { useRecoilValue } from 'recoil';
import { useState } from 'react';
import TodoSelector from './Atom/TodoAtom';

const UserComponent = () => {
  const todos = useRecoilValue(TodoSelector);
  const [toggleTodo, setToggleTodo] = useState<boolean>(false);
  return (
    <div>
      <button onClick={() => setToggleTodo(!toggleTodo)}>할일 조회하기</button>
      {toggleTodo && (
        <div>
          {todos.map((todo) => (
            <div key={todo.id}>{todo.title}</div>
          ))}
        </div>
      )}
    </div>
  );
};
export default UserComponent;
