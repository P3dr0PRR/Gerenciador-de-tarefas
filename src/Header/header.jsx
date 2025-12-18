import { ClipboardList } from "lucide-react";

export function Header() {
  return (
    <div className="w-full p-4 cursor-default">
      <div className="bg-white/80 p-4 shadow-md rounded-md flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <ClipboardList size={32} />
          <h1 className="text-2xl font-bold">Gerenciador de tarefas</h1>
        </div>
        <p className="mt-1">Organize suas tarefas de forma eficiente!</p>
      </div>
    </div>
  );
}
