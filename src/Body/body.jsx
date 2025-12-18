import { useState, useEffect } from "react";

import { ToDo } from "./to-do.jsx";
import { Add } from "./add.jsx";
import { Tarefas } from "./tarefas.jsx";

export function Body() {
  const [tarefas, setTarefas] = useState("");
  const [tarefasPendentes, setTarefasPendentes] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefasPendentes");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });
  const [tarefasConcluidas, setTarefasConcluidas] = useState(() => {
    const tarefasSalvas = localStorage.getItem("tarefasConcluidas");
    return tarefasSalvas ? JSON.parse(tarefasSalvas) : [];
  });

  useEffect(() => {
    localStorage.setItem("tarefasPendentes", JSON.stringify(tarefasPendentes));
  }, [tarefasPendentes]);

  useEffect(() => {
    localStorage.setItem(
      "tarefasConcluidas",
      JSON.stringify(tarefasConcluidas)
    );
  }, [tarefasConcluidas]);

  return (
    <div className="min-w-screen p-4 bg-stone-50 rounded-md shadow-md mx-4">
      <div className="flex flex-col justify-center">
        <ToDo
          total={tarefasPendentes.length + tarefasConcluidas.length}
          concluidas={tarefasConcluidas.length}
          pendentes={tarefasPendentes.length}
        />

        <Add
          tarefas={tarefas}
          setTarefas={setTarefas}
          tarefasPendentes={tarefasPendentes}
          setTarefasPendentes={setTarefasPendentes}
        />

        <Tarefas
          tarefasPendentes={tarefasPendentes}
          setTarefasPendentes={setTarefasPendentes}
          tarefasConcluidas={tarefasConcluidas}
          setTarefasConcluidas={setTarefasConcluidas}
        />
      </div>
    </div>
  );
}
