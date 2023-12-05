import { ReactNode } from "react";


interface InfoProps {
    title?: string | ReactNode | number
    text?: string | ReactNode | number
}
export const Info = ({ text, title }: InfoProps) => {
    return (
        <div className="text-gray-300  flex items-center gap-2 ">
            <p>{title}</p>
            <span className="font-bold">{text}</span>
        </div>
    );
}