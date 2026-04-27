export default function Footer() {
  const date = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  return (
    <footer className="foot">
      <div>charlieliu.dev — index</div>
      <div className="center">Next.js · deployed on Vercel</div>
      <div className="right">Last deploy {date}</div>
    </footer>
  );
}
