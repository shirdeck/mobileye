//=============================================================================
// Counter Component
//=============================================================================

import React, {useState, useEffect} from 'react'

/* Created functional component called Counter and new state values using the useState hook.
The first hook creates the countdown date The second hook stores data for the remaining days, hours, minutes and seconds until the countdown date. These are each set to 0, and will be updated every second.
*/

const Counter = () => {
  // eslint-disable-next-line
  const [countdownDate, setCountdownDate] = useState(new Date('2021-03-01T17:00:00').getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Used useEffect hook to set up an interval that will run every second. Each time it runs, it calls updateCountdown function

  useEffect(() => {
    const tick = setInterval(() => setNewTime(), 1000); 
    return () => clearInterval(tick) 
    // eslint-disable-next-line
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      // Get the current time
      const currentTime = new Date().getTime();

      // Get the time remaining until the countdown date
      const distanceToDate = countdownDate - currentTime;

      // Calculate days, hours, minutes and seconds remaining
      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      // Adds a zero to each number that's only one digit
      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = `${days}`;
      if (numbersToAddZeroTo.includes(hours)) {
        hours = `0${hours}`;
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = `0${minutes}`;
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = `0${seconds}`;
      }

      // Set the state to each new time
      setState({ days: days, hours: hours, minutes, seconds });
    }
  };

  return (
      <div className='countdown-wrapper'>
        <div className='time-section'>
          <div className='time'>{state.days || '0'}</div>
          <small className="time-text">Days</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.hours || '00'}</div>
          <small className="time-text">Hours</small>
        </div>
        <div className='time-section'>
          <div className='time'>{state.minutes || '00'}</div>
          <small className="time-text">Minutes</small>
        </div>

        <div className='time-section'>
          <div className='time'>{state.seconds || '00'}</div>
          <small className="time-text">Seconds</small>
        </div>
      </div>
  );
};

export default Counter;