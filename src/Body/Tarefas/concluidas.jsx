import { Trash2, Check } from "lucide-react";

export function Concluidas({ tarefasConcluidas, deletarTarefaConcluida }) {
  return (
    <div>
      {tarefasConcluidas.length === 0 ? (
        <div>
          <p className="text-center text-gray-500 mt-4">
            Nenhuma tarefa concluída.
          </p>
          <p className="text-center text-gray-500 mt-2">
            Conclua uma tarefa para começar.
          </p>
        </div>
      ) : (
        <div className="">
          {tarefasConcluidas.map((tarefa, index) => (
            <div
              key={index}
              className="w-full p-4 mb-2 bg-white/80 shadow-md rounded-md flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 bg-green-600 text-white rounded" />

                <span className="text-gray-600 line-through">{tarefa}</span>
              </div>

              <button
                type="button"
                onClick={() => deletarTarefaConcluida(index)}
              >
                <Trash2 className="w-5 h-5 text-red-500 hover:scale-125 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
