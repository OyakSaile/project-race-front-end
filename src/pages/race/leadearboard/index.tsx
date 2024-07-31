import mockImage from "@/assets/mock-car.jpg";
import { Button } from "@/components/Button";
import { useNuiEvent } from "@/hooks/useNuiEvent";
import { useRace } from "@/hooks/useRace";
import { nuiApi } from "@/services/nuiApi";
import { fetchNui } from "@/utils/fetchNui";
import {
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Table,
} from "@nextui-org/react";
import { GameController, Keyboard } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

export const RaceLeaderboard: React.FC = () => {
  const { raceStats } = useRace();
  const [leaderBoard, setLeaderBoard] = useState([] as any);

  useEffect(() => {
    const loadData = async () => {
      await nuiApi.post("leaderboard:data", {
        data: "",
      });
    };

    loadData();
  }, []);

  useNuiEvent("leaderboard:list", (data) => {
    setLeaderBoard(data);
  });

  const handleClose = () => {
    fetchNui("leaderboard:close");
  };

  return (
    <div className="h-screen w-full p-4 flex flex-col justify-between">
      <div className="flex flex-col rounded-md w-full">
        <div className="bg-black w-full py-3">
          <h1 className="text-white font-inter text-xs font-bold text-center rounded-md">
            {raceStats?.data.raceName}
          </h1>
        </div>
        <div className="bg-black/80 p-4 overflow-y-auto max-h-[calc(100vh-200px)] no-scrollbar w-full">
          <Table
            className="w-full"
            radius="none"
            layout="fixed"
            removeWrapper
          >
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
              <TableColumn className="bg-transparent text-white">
                MMR
              </TableColumn>
            </TableHeader>
            <TableBody className="text-white">
              {leaderBoard.map((item: any, index: any) => (
                <TableRow className="text-white" key={item.userName}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>
                    <div className='flex gap-2'>
                      {item.gameped === 'teclado' && (
                        <Keyboard className="text-gray-400" size={20} weight="fill" />
                      )} 
                      {item.gameped === 'controle' && (
                        <GameController className="text-gray-400" size={20} weight="fill" />
                      )}
                      {item.userName.length > 13 ? item.userName.slice(0, 13) + "..." : item.userName}
                    </div>
                   </TableCell>
                  <TableCell>{item.bestLap}</TableCell>
                  <TableCell>{item.totalTime}</TableCell>
                  <TableCell>{item.mmr}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div onClick={handleClose} className="w-[200px] m-auto mt-4 mb-8 flex justify-center">
        <Button>CLOSE</Button>
      </div>
    </div>
  );
}

export default RaceLeaderboard;