import type { LucideIcon } from "lucide-react";
import CountUp from "react-countup";

type CounterValue = {
  icon: LucideIcon;
  iconBg: string;
  counter: number;
  description: string;
};

function CounterCard({
  icon: Icon,
  iconBg,
  counter,
  description,
}: CounterValue) {
  return (
    <div className="container w-[300px] h-[300px] text-3xl bg-white border border-white shadow-white text-[var(--secondary-color)] rounded-xl hover:scale-105 transition">
      <div className="flex flex-col items-center justify-around w-full h-full p-5">
        <div style={{ backgroundColor: iconBg }} className="p-5 rounded-full">
          <Icon size={80} strokeWidth={1} color="black" />
        </div>
        <div className="font-bold">
          <CountUp end={counter} duration={2} suffix="+" enableScrollSpy />
        </div>
        <div className="text-2xl">{description}</div>
      </div>
    </div>
  );
}

export default CounterCard;
