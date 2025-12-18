import { Trash2 } from "lucide-react";

export function Pendentes({ tarefasPendentes, concluirTarefa, deletarTarefa }) {
  return (
    <div>
      {tarefasPendentes.length === 0 ? (
        <div>
          <p className="text-center text-gray-500 mt-4">
            Nenhuma tarefa pendente.
          </p>
          <p className="text-center text-gray-500 mt-2">
            Adicione uma nova tarefa para começar.
          </p>
        </div>
      ) : (
        <div className="px-4">
          {tarefasPendentes.map((tarefa, index) => (
            <div
              key={index}
              className="w-full p-4 mb-2 bg-white/80 shadow-md rounded-md flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="accent-green-600 h-5 w-5 cursor-pointer"
                  onClick={() => concluirTarefa(index)}
                />

                <span>{tarefa}</span>
              </div>

              <button onClick={() => deletarTarefa(index)}>
                <Trash2 className="w-5 h-5 text-red-500 hover:scale-125 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
