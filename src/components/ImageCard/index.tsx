interface ImageSelectProps {
  onClick: () => void;
  image: string;
  title?: string;
  description?: string;
}
export function ImageCard({
  onClick,
  image,
  title,
  description,
}: ImageSelectProps) {
  return (
    <div
      onClick={onClick}
      className="group transition-all cursor-pointer relative"
    >
      <img
        className="w-full h-full object-cover group-hover:brightness-50 filter brightness-[25%] transition-all"
        src={image}
      />

      <div className="absolute group top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2 group-hover:grayscale-0">
        <h2 className="font-monomaniac text-white/15 group-hover:text-white group text-6xl">
          {title}
        </h2>

        <h3 className="font-inter font-normal text-white/15 group-hover:text-white text-base mt-4">
          {description}
        </h3>
      </div>
    </div>
  );
}
