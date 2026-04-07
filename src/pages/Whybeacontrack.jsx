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
      text: (
        <>
          Achieved <span className="font-semibold text-red-600">30% annual growth</span> 
          by optimizing business workflows.
        </>
      ),
    },
    {
      icon: <Users className="text-yellow-500" size={22} />,
      bg: "bg-yellow-100",
      text: (
        <>
          Boosted team efficiency with 
          <span className="font-semibold text-yellow-600"> 5x higher performance</span>.
        </>
      ),
    },
    {
      icon: <CreditCard className="text-blue-500" size={22} />,
      bg: "bg-blue-100",
      text: (
        <>
          Accelerated billing cycles with 
          <span className="font-semibold text-blue-600"> 3x faster payments</span>.
        </>
      ),
    },
    {
      icon: <Box className="text-gray-600" size={22} />,
      bg: "bg-gray-200",
      text: (
        <>
          Saved over 
          <span className="font-semibold text-gray-800"> €1500</span> through smarter inventory management.
        </>
      ),
    },
    {
      icon: <Clock className="text-green-500" size={22} />,
      bg: "bg-green-100",
      text: (
        <>
          Reduced manual effort and saved 
          <span className="font-semibold text-green-600"> 80% of employee time</span>.
        </>
      ),
    },
    {
      icon: <UserCheck className="text-blue-500" size={22} />,
      bg: "bg-blue-100",
      text: (
        <>
          Improved customer experience with 
          <span className="font-semibold text-blue-600"> 50% higher satisfaction</span>.
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#f7f7f9] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 leading-tight">
            Why <span className="text-blue-600">Beacon Track</span>?
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            Businesses trust Beacon Track to streamline operations, boost productivity, 
            and deliver measurable growth.
          </p>
        </div>

        {/* Right Side */}
        <div>
          <p className="text-center text-gray-600 mb-8 text-lg">
            After just <span className="font-semibold text-gray-900">1 year</span>, 
            our customers report outstanding improvements:
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
           {features.map((item, index) => (
  <div
    key={index}
    className="group relative p-[1px] rounded-2xl bg-transparent transition duration-300 hover:scale-[1.03] h-full"
  >
    {/* Gradient Border */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-sm transition duration-300"></div>

    {/* Card Content */}
    <div className="relative flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm group-hover:shadow-lg transition duration-300 h-full min-h-[110px]">
      
      {/* Icon */}
      <div
        className={`w-12 h-12 flex items-center justify-center rounded-full ${item.bg} flex-shrink-0`}
      >
        {item.icon}
      </div>

      {/* Text */}
      <div className="flex-1">
        <p className="text-gray-700 text-sm leading-relaxed">
          {item.text}
        </p>
      </div>
    </div>
  </div>
))}
          </div>
        </div>

      </div>
    </section>
  );
}