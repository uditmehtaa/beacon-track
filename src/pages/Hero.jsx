export default function Hero() {
  return (
    <section className="pt-28 pb-20 px-6 text-center">
      <h1 className="text-heading text-5xl font-semibold max-w-3xl mx-auto leading-tight">
        Build, automate and scale your workflows effortlessly
      </h1>

      <p className="mt-6 text-lg text-text max-w-xl mx-auto">
        A modern platform to manage your processes, automate tasks and grow faster.
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-accent text-white px-6 py-3 rounded-lg shadow-soft hover:opacity-90">
          Get Started
        </button>

        <button className="border border-border px-6 py-3 rounded-lg hover:bg-accent-bg">
          Learn More
        </button>
      </div>
    </section>
  );
}
