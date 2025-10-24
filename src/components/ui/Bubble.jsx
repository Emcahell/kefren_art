export const Bubble = ({ className = '' }) => {
  return <div className={`absolute w-[500px] h-[500px] rounded-full -z-10 ${className}`}></div>;
}