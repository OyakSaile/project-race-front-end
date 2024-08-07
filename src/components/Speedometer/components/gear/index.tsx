import gearIcon from "@/assets/gear-icon.svg";

interface GearProps {
  gear: number;
}
export function Gear({ gear }: GearProps) {
  return (
    <div className="bg-blue-primary/70 px-3 flex justify-center items-center rounded-lg flex-col gap-1">
      <h2 className="text-[22px] font-normal font-monomaniac text-white">
        {gear}
      </h2>
      <img src={gearIcon} />
    </div>
  );
}
