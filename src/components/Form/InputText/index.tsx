import { WarningOctagon } from "@phosphor-icons/react/dist/ssr";
import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface InputTextProps {
  label?: string;
  hasError?: boolean;
  errorMessage?: string;
}
interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {}
export const InputText: React.FC<InputTextProps> = ({
  label,
  hasError,
  errorMessage,
  ...rest
}) => {
  return (
    <div>
      {label && (
        <label
          htmlFor="email"
          className="block text-sm font-medium leading-6 text-white"
        >
          {label}
        </label>
      )}
      <div className="relative mt-2 rounded-md shadow-sm">
        <input
          {...rest}
          type="text"
          className={twMerge(
            `block pl-4  relative w-full outline-none  rounded-md border-0 py-1.5 pr-10 bg-white   sm:text-sm sm:leading-6  ring-1 ring-inset  placeholder:text-blue-800 focus:ring-inset focus:ring-blue-500`,
            `${
              hasError &&
              "text-red-900   ring-1 ring-inset ring-red-300 placeholder:text-red-300 focus:ring-2 focus:ring-inset focus:ring-red-500"
            }`
          )}
        />

        {hasError && (
          <p className="mt-2 text-sm text-red-600" id="email-error">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};
