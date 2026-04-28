import LoadingAnimation from "./LoadingAnimation";

//  MAKE LOADING RECS CARDS

export default function RecsLoad({ type }) {
  return (
    <section className="recommendations">
      <h3 className="mid-title">{type} Recommendations</h3>
      <LoadingAnimation />
    </section>
  );
}
