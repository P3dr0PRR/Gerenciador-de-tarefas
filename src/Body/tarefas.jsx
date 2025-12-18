import React, { useState } from "react";
import { Todas } from "./Tarefas/todas.jsx";
import { Concluidas } from "./Tarefas/concluidas.jsx";
import { Pendentes } from "./Tarefas/pendentes.jsx";

export function Tarefas({
  tarefasPendentes,
  setTarefasPendentes,
  tarefasConcluidas,
  setTarefasConcluidas,
}) {
  const [filtros, setFiltros] = useState("Todos");

  function deletarTarefa(index) {
    const novasTarefas = [...tarefasPendentes];
    novasTarefas.splice(index, 1);
    setTarefasPendentes(novasTarefas);
  }

  function concluirTarefa(index) {
    const copiaPendentes = [...tarefasPendentes];
    const removida = copiaPendentes.splice(index, 1);

    setTarefasPendentes(copiaPendentes);
    setTarefasConcluidas([...tarefasConcluidas, removida[0]]);
  }

  function deletarTarefaConcluida(index) {
    const novas = [...tarefasConcluidas];
    novas.splice(index, 1);
    setTarefasConcluidas(novas);
  }

  return (
    <div>
      <div className="w-auto flex justify-between p-6 ">
        <button
          className={`px-10 py-2 rounded-md ${
            filtros === "Todos"
              ? "bg-blue-600 text-white font-semibold"
              : "hover:bg-blue-100"
          }`}
          onClick={() => setFiltros("Todos")}
        >
          Todas ({tarefasPendentes.length + tarefasConcluidas.length})
        </button>
        <button
          className={`px-10 py-2 rounded-md ${
            filtros === "Concluidas"
              ? "bg-blue-600 text-white font-semibold"
              : "hover:bg-blue-100"
          }`}
          onClick={() => setFiltros("Concluidas")}
        >
          Concluidas ({tarefasConcluidas.length})
        </button>
        <button
          className={`px-10 py-2 rounded-md ${
            filtros === "Pendentes"
              ? "bg-blue-600 text-white font-semibold"
              : "hover:bg-blue-100"
          }`}
          onClick={() => setFiltros("Pendentes")}
        >
          Pendentes ({tarefasPendentes.length})
        </button>
      </div>

      {filtros === "Todos" && (
        <Todas
          tarefasPendentes={tarefasPendentes}
          concluirTarefa={concluirTarefa}
          deletarTarefa={deletarTarefa}
        />
      )}

      {filtros === "Pendentes" && (
        <Pendentes
          tarefasPendentes={tarefasPendentes}
          concluirTarefa={concluirTarefa}
          deletarTarefa={deletarTarefa}
        />
      )}

      {filtros === "Concluidas" && (
        <Concluidas
          tarefasConcluidas={tarefasConcluidas}
          deletarTarefaConcluida={deletarTarefaConcluida}
        />
      )}
    </div>
  );
}
