function App() {
    return (
      <div>
        <Tweet
          name="Ben Dover"
          username="doverboy123"
          date={new Date().toDateString()}
          message="I'm the real Ben"
        />
        <Tweet
          name="Benjamin Dover"
          username="realdoverboy123"
          date={new Date().toDateString()}
          message="No I am"
        />
      </div>
    );
  }