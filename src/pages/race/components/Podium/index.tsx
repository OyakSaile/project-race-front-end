import { Clock } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface PodiumList {
  user_id: string;
  user_name: string;
  total_time: string;
}

interface PodiumProps {
  hasDnf: boolean;
  playerPosition: string;
}

export const Podium: React.FC<PodiumProps> = ({ playerPosition }) => {
  const [podium, setPodium] = useState<PodiumList[]>([]);

  // useNuiEvent('podium', (data: PodiumList[]) => {
  //   setPodium(data);
  // });

  useEffect(() => {
    setPodium([]);
  }, []);

  if (!podium) {
    return null;
  }

  return (
    <div className="w-[250px] ">
      <div className="flex flex-col gap-1   text-white items-center w-full">
        {podium.map((item, index) => (
          <div className="w-full" key={index}>
            <div className="flex gap-2 w-full">
              <div className="bg-[rgba(24,24,27,0.40)] w-[10px]  rounded-md px-4 py-1 flex justify-center items-center ">
                <h2
                  className={twMerge(
                    'text-white font-inter font-bold text-xs',
                    `${Number(playerPosition) === index + 1 ? 'text-green-400' : 'text-white'}`
                  )}>
                  {index + 1}
                </h2>
              </div>

              <div className="bg-[rgba(24,24,27,0.40)] py-1 flex pl-2 pr-2 rounded  flex-col  w-full ">
                <h2
                  className={twMerge(
                    'text-white font-bold font-inter  text-xs flex gap-4  justify-between',
                    `${Number(playerPosition) === index + 1 ? 'text-green-400' : 'text-white'}`
                  )}>
                  {item.user_name.length > 10
                    ? item.user_name.slice(0, 10) + '...'
                    : item.user_name}
                  <span
                    className={twMerge(
                      'text-white text-[11px] gap-1 flex items-center self-end justify-end',
                      `${Number(playerPosition) === index + 1 ? 'text-green-400' : 'text-white'}`
                    )}>
                    <Clock size={11} />
                    {item.total_time}
                  </span>
                </h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
