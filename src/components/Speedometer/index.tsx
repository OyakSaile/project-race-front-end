import { twMerge } from "tailwind-merge";
import { Gear } from "./components/gear";
import { Speed } from "./components/speed";
import { RenderIf } from "../RenderIf";
interface SpeedometerProps {
  mph: string;
  quilometragem: string;
  gear: number;
}

export const Speedometer = ({ mph, quilometragem, gear }: SpeedometerProps) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <RenderIf condition={gear >= 0}>
            <Gear gear={gear} />
          </RenderIf>

          <RenderIf condition={!!mph}>
            <Speed mph={mph} />
          </RenderIf>
        </div>
      </div>
    </div>
  );
};
