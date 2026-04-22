import LoadingAnimation from "./LoadingAnimation";

export default function RecsLoad({ type }) {
  return (
    <section className="recommendations">
      <h3 className="mid-title">{type} Recommendations</h3>
      <LoadingAnimation />
    </section>
  );
}
