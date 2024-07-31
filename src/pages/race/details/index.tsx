import { Badge } from "@/components/Badge";
import { KeyboardBadge } from "@/components/KeyboardBadge";

export function RaceDetails() {
  return (
    <div className="p-12 h-screen w-full">
      <div className="bg-black/65 h-full p-4 w-[537px] relative">
        <div className="flex gap-2">
          <Badge text="RACE DETAILS" />
          <Badge text="01H" variation="secondary" />
          <Badge text="09M" variation="secondary" />
          <Badge text="19S" variation="secondary" />
        </div>

        <KeyboardBadge
          className="absolute left-4 bottom-4"
          keyboard="ESC"
          description="CLOSE"
        />
      </div>
    </div>
  );
}
