import { Trash2 } from "lucide-react";

export function Todas({ tarefasPendentes, concluirTarefa, deletarTarefa }) {
  return (
    <div>
      {tarefasPendentes.length === 0 ? (
        <div>
          <p className="text-center text-gray-500 mt-4">
            Nenhuma tarefa definida.
          </p>
          <p className="text-center text-gray-500 mt-2">
            Adicione uma nova tarefa para começar.
          </p>
        </div>
      ) : (
        <div className="w-full p-4 bg-white/80 shadow-md rounded-md">
          <ul>
            {tarefasPendentes.map((tarefa, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-green-600 cursor-pointer"
                    onChange={() => concluirTarefa(index)}
                  />
                  <span>{tarefa}</span>
                </div>

                <button type="button" onClick={() => deletarTarefa(index)}>
                  <Trash2 className="w-5 h-5 text-red-500 hover:scale-125 transition-transform duration-300" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
