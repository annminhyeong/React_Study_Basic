import React, { useState, useTransition, useDeferredValue } from 'react';

let a = new Array(10000).fill(0);

function Test() {
  let [name, setName] = useState('');
  let [isPending, startTransition] = useTransition();
  let state = useDeferredValue(name);

  return (
    <div className='Test'>
      <input
        onChange={(e) => {
          startTransition(() => {
            setName(e.target.value);
          });
        }}
      />
      {isPending
        ? '로딩중'
        : a.map(() => {
            return <div>{name}</div>;
          })}
    </div>
  );
}

export default Test;
