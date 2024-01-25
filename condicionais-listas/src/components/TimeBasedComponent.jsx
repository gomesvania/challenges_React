const TimeBasedComponent = () => {
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  return (
    <div>
     <p>{greeting}</p>
    </div>
  );
}

export default TimeBasedComponent;