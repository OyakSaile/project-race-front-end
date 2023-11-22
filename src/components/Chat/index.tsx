import { Balloon } from "./components/Balloon";

export const Chat = () => {
  const mockHistoric = [
    {
      id: 1,
      role: "STAFF",
      name: "Racer",
      message:
        "The text in the input, which occupies two lines or more, in case if theres a lot of info inside",
      color: "red",
    },
    {
      id: 1,
      role: "STAFF",
      name: "Racer",
      message:
        "The text in the input, which occupies two lines or more, in case if theres a lot of info inside",
      color: "red",
    },
    {
      id: 1,
      role: "STAFF",
      name: "Racer",
      message:
        "The text in the input, which occupies two lines or more, in case if theres a lot of info inside",
      color: "red",
    },
    {
      id: 1,
      role: "STAFF",
      name: "Racer",
      message:
        "The text in the input, which occupies two lines or more, in case if theres a lot of info inside",
      color: "red",
    },
    {
      id: 1,
      role: "STAFF",
      name: "Racer",
      message:
        "The text in the input, which occupies two lines or more, in case if theres a lot of info inside",
      color: "red",
    },
    {
      id: 1,
      role: "STAFF",
      name: "Racer",
      message:
        "The text in the input, which occupies two lines or more, in case if theres a lot of info inside",
      color: "red",
    },
  ];

  return (
    <div className="h-[250px]  w-[480px] absolute flex flex-col ">
      <div className="flex flex-col gap-4 overflow-y-auto h-[200px] no-scrollbar">
        {mockHistoric.map(({ color, id, message, name, role }) => (
          <Balloon />
        ))}
      </div>

      <input
        className="w-full p-4 focus:outline-none bg-[rgba(24,24,27,0.30)] ouline-none text-white font-inter text-sm font-normal  rounded-md py-2 px-2 mt-auto"
        type="text"
        placeholder="Digite sua mensagem"
      />
    </div>
  );
};
