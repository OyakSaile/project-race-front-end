import mockImage from "@/assets/mock-car.jpg";
import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Table,
} from "@nextui-org/react";
export const RaceLeaderboard: React.FC = () => {
  const mockData = [
    {
      name: "KKKKKKKKKKKKKKKKKKKKKKKK",
      time: "1:23",
      pos: 1,
      mmr: 123,
      bestTime: "01:23:50",
      totalTime: "01:23:50",
    },
    {
      name: "Kayo",
      time: "1:23",
      pos: 2,
      mmr: 123,
      bestTime: "01:23:50",
      totalTime: "01:23:50",
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
      <div className=" flex-col rounded-md   m-auto w-full">
        <div className="bg-black   w-full py-3">
          <h1 className="text-white font-inter text-xs  font-bold text-center rounded-md">
            CONCRETE CORNERS
          </h1>
        </div>
        <div className="bg-black/80 p-4 ">
          <Table radius="none" layout="fixed" removeWrapper>
            <TableHeader>
              <TableColumn className="bg-transparent text-white">
                PLACE
              </TableColumn>
              <TableColumn className="bg-transparent text-white">
                NAME
              </TableColumn>
              <TableColumn className="bg-transparent text-white">
                BEST TIME
              </TableColumn>
              <TableColumn className="bg-transparent text-white">
                TOTAL TIME
              </TableColumn>
              <TableColumn>MMR</TableColumn>
            </TableHeader>
            <TableBody className="text-white">
              {mockData.map((item, index) => (
                <TableRow className="text-white" key="1">
                  <TableCell>{item.pos}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.bestTime}</TableCell>
                  <TableCell>{item.totalTime}</TableCell>
                  <TableCell>{item.mmr}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};
