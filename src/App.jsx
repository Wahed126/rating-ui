import Rating from "./components/Rating";
const App = () => {
  return (
    <div>
      <Rating
        heading="How you feel about React"
        feedbackMessages={[
          "Hate it",
          "Dislike it",
          "Meh",
          "Like it",
          "Love it",
        ]}
      />
    </div>
  );
};

export default App;
