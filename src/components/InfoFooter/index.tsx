import { Check } from 'phosphor-react'
interface InfoFooterProps {
  count: number;
  text: string;
}

export function InfoFooter({count, text}: InfoFooterProps) {
  return (
    <div className="flex gap-6 items-center">
      <div className="flex justify-center items-center bg-green-500 rounded-full w-10 h-10 text-center">
        <Check size={24} />
      </div>
      <div className="flex flex-col">
        <span className="text-2xl font-bold">+{count}</span>
        <span className="text-gray-200 text-base	">{text}</span>
      </div>
    </div>
  )
}