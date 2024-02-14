import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';

import { fetchRandomGreeting } from '../redux/features/greetings/greetingSlice';

function Greeting() {
  const dispatch = useDispatch();
  const { greeting, isLoading, error } = useSelector((store) => ({
    greeting: store.greeting.greeting,
    isLoading: store.greeting.isLoading,
    error: store.greeting.error,
  }));

  useEffect(() => {
    if (isLoading) {
      dispatch(fetchRandomGreeting());
    }
  }, [isLoading, dispatch]);

  if (isLoading) {
    return <div>Fetching greeting...</div>;
  }

  if (error) {
    return <div>{`We encountered an error: ${JSON.stringify(error)}`}</div>;
  }

  if (!greeting) {
    return <h2>There are no greetings today, try again later</h2>;
  }
  return (
    <div>
      <h2>Today&apos;s greeting</h2>
      <strong>
        <p>{greeting.greeting}</p>
      </strong>
    </div>
  );
}

export default Greeting;


