import React from "react";

export function ToDo({ total = 0, concluidas = 0, pendentes = 0 }) {
  return (
    <div className="w-full cursor-default">
      <div className="grid w-full grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col items-center justify-center bg-blue-100 border border-blue-500 rounded-md p-4 shadow min-w-0 md:h-32">
          <h1 className="text-2xl md:text-3xl font-bold text-blue-500">
            {total}
          </h1>
          <h3 className="text-blue-700 text-sm sm:text-base">Total</h3>
        </div>

        <div className="flex flex-col items-center justify-center bg-green-100 border border-green-500 rounded-md p-4 shadow min-w-0 md:h-32">
          <h1 className="text-2xl md:text-3xl font-bold text-green-500">
            {concluidas}
          </h1>
          <h3 className="text-green-700 text-sm sm:text-base">Concluídas</h3>
        </div>

        <div className="flex flex-col items-center justify-center bg-orange-100 border border-orange-500 rounded-md p-4 shadow min-w-0 md:h-32">
          <h1 className="text-2xl md:text-3xl font-bold text-orange-500">
            {pendentes}
          </h1>
          <h3 className="text-orange-700 text-sm sm:text-base">Pendentes</h3>
        </div>
      </div>
    </div>
  );
}
