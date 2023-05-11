import { useRecoilValue } from 'recoil';
import { countAtom } from './Atom/Atom';
import { useEffect } from 'react';

const AnotherCount = () => {
  const count = useRecoilValue(countAtom);
  useEffect(() => {
    console.log(`count가 ${count}로 바뀌었어요`);
  }, [count]);
  return (
    <div>다른 컴포넌트에서도 같은 atom을 구독하면, 리랜더링이 발생합니다!</div>
  );
};

export default AnotherCount;
