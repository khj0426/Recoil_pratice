import { atom } from 'recoil';
import { selector } from 'recoil';

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};
const TodoSelector = selector<Todo[]>({
  key: 'asyncDataSelector',
  get: async ({ get }) => {
    const todos = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todo = await todos.json();
    return todo;
  },
});

export default TodoSelector;
