import {
  TrendingUp,
  Users,
  CreditCard,
  Box,
  Clock,
  UserCheck,
} from "lucide-react";

export default function Whybeakontrack() {
  const features = [
    {
      icon: <TrendingUp className="text-red-500" size={22} />,
      bg: "bg-red-100",
      text: "30% annual growth",
    },
    {
      icon: <Users className="text-yellow-500" size={22} />,
      bg: "bg-yellow-100",
      text: "5x increased team performance",
    },
    {
      icon: <CreditCard className="text-blue-500" size={22} />,
      bg: "bg-blue-100",
      text: "3x faster paid invoices",
    },
    {
      icon: <Box className="text-gray-500" size={22} />,
      bg: "bg-gray-200",
      text: "€1500 saved through inventory control",
    },
    {
      icon: <Clock className="text-green-500" size={22} />,
      bg: "bg-green-100",
      text: "80% saved employees’ time",
    },
    {
      icon: <UserCheck className="text-blue-500" size={22} />,
      bg: "bg-blue-100",
      text: "50% customer satisfaction growth",
    },
  ];

  return (
    <section className="bg-[#f7f7f9] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
            Why Beacon Track?
          </h2>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-center text-gray-600 mb-8 text-lg">
            After 1 year with Beacon Track, our customers have seen incredible results:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg}`}
                >
                  {item.icon}
                </div>

                {/* Text */}
                <p className="text-gray-700 font-medium leading-snug">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}