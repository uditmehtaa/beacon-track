export default function Features() {
  const data = [
    {
      title: "Automation",
      desc: "Automate repetitive tasks and save time.",
    },
    {
      title: "Analytics",
      desc: "Track performance with real-time insights.",
    },
    {
      title: "Integrations",
      desc: "Connect with your favorite tools easily.",
    },
  ];

  return (
    <section className="py-20 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 border border-border rounded-xl shadow-soft hover:shadow-lg transition"
          >
            <h2 className="text-heading text-xl mb-2">{item.title}</h2>
            <p className="text-text">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}