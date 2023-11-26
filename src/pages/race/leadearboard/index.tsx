import mockImage from "@/assets/mock-car.jpg";
export const RaceLeaderboard: React.FC = () => {
  const mockData = [
    {
      name: "KAYO",
      time: "1:23",
      pos: 1,
      mmr: 123,
    },
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${mockImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="h-screen w-full p-12 relative"
    >
      <div className=" flex-col rounded-md absolute right-12 m-auto w-[600px]">
        <div className="bg-black  w-full p-4">
          <h1 className="text-white font-inter text-xl font-bold text-center rounded-md">
            CONCRETE CORNERS
          </h1>
        </div>
        <div className="bg-black/80 p-4 ">
          <table className="  text-white w-full rounded-md">
            <thead>
              <tr>
                <th className="">POS</th>
                <th className="">DRIVER</th>
                <th className="">TIME</th>
                <th className="">MMR</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {mockData.map((item) => (
                <tr>
                  <td className="  ">{item.pos}</td>
                  <td className="  ">{item.name}</td>
                  <td className="  ">{item.time}</td>
                  <td className="  ">{item.mmr}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
