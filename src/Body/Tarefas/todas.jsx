import { Trash2 } from "lucide-react";

export function Todas({
  tarefasPendentes,
  tarefasConcluidas,
  concluirTarefa,
  deletarTarefa,
  deletarTarefaConcluida,
}) {
  const todasAsTarefas = [
    ...(tarefasPendentes ?? []),
    ...(tarefasConcluidas ?? []),
  ];
  const qtdPendentes = (tarefasPendentes ?? []).length;

  return (
    <div>
     
        <div>
          <p className="text-center text-gray-500 mt-4">
            Nenhuma tarefa definida.
          </p>
          <p className="text-center text-gray-500 mt-2">
            Adicione uma nova tarefa para começar.
          </p>
        </div>
      ) : (
        <div className="w-full p-4 mb-2 bg-white/80 shadow-md rounded-md flex items-center justify-between">
          <ul>
            {todasAsTarefas.map((tarefa, index) => (
              <li
                key={index}
                className="flex justify-between items-center py-2 border-b"
              >
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 accent-green-600 cursor-pointer"
                    checked={index >= qtdPendentes}
                    onChange={() => {
                      if (index < qtdPendentes) {
                        concluirTarefa(index);
                      }
                    }}
                  />
                  <span>{tarefa}</span>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    if (index < qtdPendentes) {
                      deletarTarefa(index);
                    } else {
                      const idxConcluida = index - qtdPendentes;
                      if (typeof deletarTarefaConcluida === "function") {
                        deletarTarefaConcluida(idxConcluida);
                      }
                    }
                  }}
                >
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
