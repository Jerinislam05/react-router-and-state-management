import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker rental",
        "Access to fitness classes (limited)",
      ],
    },
    {
      id: 2,
      name: "Premium Membership",
      price: 49.99,
      features: [
        "Access to all gym facilities",
        "Unlimited group fitness classes",
        "Personal training session (1/month)",
        "Sauna access",
      ],
    },
    {
      id: 3,
      name: "VIP Membership",
      price: 99.99,
      features: [
        "24/7 access to gym",
        "Access to sauna and steam room",
        "Towel service",
        "Personal locker",
      ],
    },
  ];

  return (
    <div className="m-12">
      <h2 className="text-2xl">Best prices in the city</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
