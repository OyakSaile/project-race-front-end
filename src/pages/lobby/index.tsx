import { Button } from "@/components/Button";
import { RenderIf } from "@/components/RenderIf";
import { DefaultTitle } from "@/components/UI/DefaultTitle";
import { Info } from "@/components/UI/info";
import { useRace } from "@/hooks/useRace";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";

export const Lobby: React.FC = () => {
  const { raceCountDown, raceStats, isPlayerReady, playersInRace } = useRace();

  return (
    <div className="w-full h-screen relative">
      <RenderIf condition={!!raceStats}>
        <div className="absolute bottom-1/2 transform translate-y-1/2   left-12 flex flex-col  ">
          <div className="bg-black/80 max-h-[500px] w-[300px] p-4">
            <RenderIf
              condition={
                raceStats?.stats === "SELECTED" ||
                raceStats?.stats === "STARTED" ||
                raceStats?.stats === "STARTING" ||
                raceStats?.stats === "FINISHED"
              }
            >
              <div className="mb-4">
                <DefaultTitle className="uppercase">
                  {raceStats?.data?.raceName}
                </DefaultTitle>
                <DefaultTitle className="uppercase">
                  {raceStats?.data.car}
                </DefaultTitle>
              </div>
            </RenderIf>

            <div className="flex flex-col  ">
              <RenderIf
                condition={
                  raceStats?.stats === "SELECTED" ||
                  raceStats?.stats === "STARTED" ||
                  raceStats?.stats === "STARTING" ||
                  raceStats?.stats === "FINISHED"
                }
              >
                <Info title="Weather:" text={raceStats?.data.weather} />
                <Info
                  title="Time:"
                  text={` ${String(raceStats?.data?.hour).padStart(
                    2,
                    "0"
                  )}:${String(raceStats?.data?.minute).padStart(2, "0")}`}
                />
                <RenderIf
                  condition={
                    raceStats?.data.raceType.toLocaleLowerCase() === "laps"
                  }
                >
                  <Info title="Laps:" text={raceStats?.data.raceLaps} />
                </RenderIf>
                <RenderIf
                  condition={
                    raceStats?.data.raceHoster.toLocaleLowerCase() !== "pr"
                  }
                >
                  <Info title="Hoster:" text={raceStats?.data.raceHoster} />
                </RenderIf>
              </RenderIf>

              <RenderIf condition={raceStats?.stats === "VOTING"}>
                <Info
                  breakWord
                  title="Waiting for players to select their race"
                />
              </RenderIf>

              <RenderIf condition={raceStats?.stats === "WAITING"}>
                <Info
                  className="mt-0"
                  title="Waiting for race to be selected"
                />
              </RenderIf>
              <RenderIf condition={raceStats?.stats !== "WAITING"}>
                <Info title="Players:" text={playersInRace} />
              </RenderIf>
              <div className="w-full  flex justify-center">
                <RenderIf
                  condition={
                    raceStats?.stats === "VOTING" ||
                    raceStats?.stats === "SELECTED"
                  }
                >
                  <Info text={raceCountDown} />
                </RenderIf>

                <RenderIf condition={raceStats?.stats === "FINISHED"}>
                  <Info text="Race finishing..." />
                </RenderIf>
              </div>

              <div className="w-full  flex justify-center">
                <RenderIf
                  condition={
                    raceStats?.stats === "STARTED" ||
                    raceStats?.stats === "STARTING"
                  }
                >
                  <Info className="mt-2" title="Wait for the race finish!" />
                </RenderIf>
              </div>
            </div>
          </div>

          <RenderIf condition={raceStats?.stats == "SELECTED"}>
            <Button
              className={twMerge(
                "mt-4",
                isPlayerReady ? "bg-red-400 text-white" : ""
              )}
            >
              {isPlayerReady ? "PRESS (E) TO LEAVE" : "PRESS (E) TO JOIN"}
            </Button>
          </RenderIf>

          <RenderIf condition={raceStats?.stats == "VOTING"}>
            <Button
              className={twMerge(
                "mt-4",
                isPlayerReady ? "bg-red-400 text-white" : ""
              )}
            >
              {isPlayerReady ? "LEAVE RACE (E)" : "PRESS (E) TO VOTE"}
            </Button>
          </RenderIf>

          <RenderIf
            condition={
              raceStats?.stats == "STARTED" || raceStats?.stats == "FINISHED"
            }
          >
            <Button
              className={twMerge(
                "mt-4",
                isPlayerReady ? "bg-red-400 text-white" : ""
              )}
            >
              PRESS (E) TO LEADERBOARD
            </Button>
          </RenderIf>
        </div>
      </RenderIf>
    </div>
  );
};
