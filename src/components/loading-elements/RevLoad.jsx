import LoadingAnimation from "./LoadingAnimation";

export default function RevLoad({ type }) {
  return (
    <section className="reviews-area">
      <h3 className="mid-title">{type} Reviews</h3>
      <LoadingAnimation />
    </section>
  );
}
