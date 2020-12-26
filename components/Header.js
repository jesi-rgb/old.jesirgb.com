import Link from "next/link";

export const Header = () => {
  return (
    <div className="header">
      <Link href="/">
        <a>Thinking Thoughts</a>
      </Link>
      <style jsx>{`
        .header {
          padding: 0.33em;
          margin-bottom: 1em;
          text-align: center;
          background: #1abc9c;
          color: white;
          font-size: 40px;
          border-radius: 20px;
          width: 100%;
        }
      `}</style>
    </div>
  );
};
