import Head from "next/head";

export const Footer = () => {
  return (
    <footer className="footer">
      jesús rascón | 2020
      <style jsx>{`
        footer {
          position: static;
          bottom: 0;
          width: 100%;

          margin-top: 8em;
          padding: 1em;
          background-color: white;
          color: #1e1e1e;
          text-align: center;
        }
      `}</style>
    </footer>
  );
};
