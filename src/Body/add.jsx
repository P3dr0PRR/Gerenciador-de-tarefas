import { Plus } from "lucide-react";

import React, { useState } from "react";

export function Add({
  tarefas,
  setTarefas,
  tarefasPendentes,
  setTarefasPendentes,
}) {
  return (
    <div className="w-full flex justify-center items-center gap-4 p-4">
      <input
        type="text"
        placeholder="Adicionar nova tarefa"
        className="flex-grow border border-gray-300 rounded-md px-4 py-2 mr-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setTarefas(e.target.value)}
      />
      <button
        onClick={() => {
          setTarefasPendentes([...tarefasPendentes, tarefas]);
          setTarefas("");
        }}
        className="text-xl font-bold flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
      >
        <Plus className="w-6 h-6" />
      </button>
    </div>
  );
}
