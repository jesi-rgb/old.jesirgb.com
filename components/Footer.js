import Container from "./container";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-accent-2 flex-shrink-0">
      <Container>
        <div className="py-12 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Jesús Rascón
          </h3>
          <h4 className="text-2xl text-right lg:text-5xl font-bold tracking-tighter leading-tight lg:text-right mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            2021
          </h4>
        </div>
      </Container>
    </footer>
  );
}
