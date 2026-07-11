export default function About({ about }) {
  return (
    <section id="about" className="scroll-mt-20 bg-slate-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-4xl font-bold mb-8">
          About Me
        </h2>

        <p className="text-gray-300 leading-8 text-lg">
          {about}
        </p>

      </div>
    </section>
  );
}
