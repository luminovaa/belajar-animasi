import { CgSpinner } from "react-icons/cg";

export const LoadingSpinner: React.FC = ({}) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-grey-200 rounded-xl">
      <CgSpinner className="animate-spin text-4xl text-pink-500" />
    </div>
  );
};
