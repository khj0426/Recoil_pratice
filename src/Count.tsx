import { useRecoilState } from 'recoil';
import { countAtom } from './Atom/Atom';

const Count = () => {
  const [count, setCount] = useRecoilState(countAtom);
  return (
    <div>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          width: '300px',
          height: '300px',
        }}
      >
        +
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{
          width: '300px',
          height: '300px',
        }}
      >
        -
      </button>
      <div>{count}</div>
    </div>
  );
};

export default Count;
