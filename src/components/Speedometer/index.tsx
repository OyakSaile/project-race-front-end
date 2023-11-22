interface SpeedometerProps {
  mph: string;
}

export const Speedometer = ({ mph }: SpeedometerProps) => {
  return (
    <div className="font-robotoMono text-2xl text-white  leading-none font-bold  items-center drop-shadow-2xl flex gap-2  ">
      {mph}{" "}
      <span className=" font-robotoMono text-2xl flex  text-white">MPH</span>
    </div>
  );
};
