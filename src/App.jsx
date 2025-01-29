import { useState } from "react";

export default function App() {
  const [fibNumber, setFibNumber] = useState(0);
  const [isFib, setIsFib] = useState(null);
  const [reversedString, setReversedString] = useState("");
  const [inputString, setInputString] = useState("");
  
  // Desafio 1
  const calculateSum = () => {
    let indice = 13, soma = 0, k = 0;
    while (k < indice) {
      k += 1;
      soma += k;
    }
    return soma;
  };

  // Desafio 2
  const checkFibonacci = () => {
    let a = 0, b = 1;
    while (b < fibNumber) {
      let temp = a + b;
      a = b;
      b = temp;
    }
    setIsFib(b === fibNumber || fibNumber === 0);
  };

  // Desafio 3
  const faturamentoDiario = [
    { "dia": 1, "valor": 22174.1664 },
    { "dia": 2, "valor": 24537.6698 },
    { "dia": 3, "valor": 26139.6134 },
    { "dia": 4, "valor": 0.0 },
    { "dia": 5, "valor": 0.0 },
    { "dia": 6, "valor": 26742.6612 },
    { "dia": 7, "valor": 0.0 },
    { "dia": 8, "valor": 42889.2258 },
    { "dia": 9, "valor": 46251.174 },
    { "dia": 10, "valor": 11191.4722 },
    { "dia": 11, "valor": 0.0 },
    { "dia": 12, "valor": 0.0 },
    { "dia": 13, "valor": 3847.4823 },
    { "dia": 14, "valor": 373.7838 },
    { "dia": 15, "valor": 2659.7563 },
    { "dia": 16, "valor": 48924.2448 },
    { "dia": 17, "valor": 18419.2614 },
    { "dia": 18, "valor": 0.0 },
    { "dia": 19, "valor": 0.0 },
    { "dia": 20, "valor": 35240.1826 },
    { "dia": 21, "valor": 43829.1667 },
    { "dia": 22, "valor": 18235.6852 },
    { "dia": 23, "valor": 4355.0662 },
    { "dia": 24, "valor": 13327.1025 },
    { "dia": 25, "valor": 0.0 },
    { "dia": 26, "valor": 0.0 },
    { "dia": 27, "valor": 25681.8318 },
    { "dia": 28, "valor": 1718.1221 },
    { "dia": 29, "valor": 13220.495 },
    { "dia": 30, "valor": 8414.61 }
  ];

  const calculateFaturamento = () => {
    const valores = faturamentoDiario.map((item) => item.valor).filter((valor) => valor > 0);
    const menorFaturamento = Math.min(...valores);
    const maiorFaturamento = Math.max(...valores);
    const mediaFaturamento = valores.reduce((acc, valor) => acc + valor, 0) / valores.length;

    const diasAcimaMedia = valores.filter((valor) => valor > mediaFaturamento).length;

    return { menorFaturamento, maiorFaturamento, diasAcimaMedia };
  };

  // Desafio 4
  const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };

  const calculatePercentualPorEstado = () => {
    const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);
    
    const percentuais = Object.entries(faturamentoPorEstado).map(([estado, valor]) => {
      return { estado, percentual: ((valor / totalFaturamento) * 100).toFixed(2) };
    });

    return percentuais;
  };

  // Desafio 5: Inverter string
  const reverseString = () => {
    let reversed = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversed += inputString[i];
    }
    setReversedString(reversed);
  };

  return (
    <div className="p-6 space-y-8 bg-gray-50 min-h-screen">
    <h1 className="text-3xl font-extrabold text-gray-800 text-center">Desafios Target</h1>
    
    {/* Desafio 1 */}
    <div className="bg-gray-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-700">Desafio 1: Soma</h2>
      <p className="text-lg text-gray-600 mt-2">Resultado: <span className="font-bold text-indigo-600">{calculateSum()}</span></p>
    </div>
    
    {/* Desafio 2 */}
    <div className="bg-gray-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-700">Desafio 2: Sequência de Fibonacci</h2>
      <div className="mt-4 flex items-center space-x-4">
        <input
          type="number"
          className="bg-white border-2 border-gray-300 p-3 rounded-lg text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          value={fibNumber}
          onChange={(e) => setFibNumber(Number(e.target.value))}
        />
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          onClick={checkFibonacci}
        >
          Verificar
        </button>
      </div>
      {isFib !== null && (
        <p className="mt-4 text-lg text-gray-700">
          {isFib ? "✔️ O número pertence à sequência de Fibonacci." : "❌ O número NÃO pertence à sequência de Fibonacci."}
        </p>
      )}
    </div>
    
    {/* Desafio 3 */}
    <div className="bg-gray-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-700">Desafio 3: Faturamento Diário</h2>
      <div className="mt-4 text-lg text-gray-600">
        <p>Menor Faturamento: <span className="font-bold text-green-600">{calculateFaturamento().menorFaturamento}</span></p>
        <p>Maior Faturamento: <span className="font-bold text-red-600">{calculateFaturamento().maiorFaturamento}</span></p>
        <p>Dias com faturamento acima da média: <span className="font-bold text-blue-600">{calculateFaturamento().diasAcimaMedia}</span></p>
      </div>
    </div>
    
    {/* Desafio 4 */}
    <div className="bg-gray-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-700">Desafio 4: Percentual de Faturamento por Estado</h2>
      <ul className="mt-4 space-y-2 text-lg text-gray-600">
        {calculatePercentualPorEstado().map((item, index) => (
          <li key={index} className="flex justify-between">
            <span className="font-semibold">{item.estado}</span>
            <span>{item.percentual}%</span>
          </li>
        ))}
      </ul>
    </div>
    
    {/* Desafio 5 */}
    <div className="bg-gray-300 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-700">Desafio 5: Inverter String</h2>
      <div className="mt-4 flex items-center space-x-4">
        <input
          type="text"
          className="border-2 bg-white border-gray-300 p-3 rounded-lg text-lg focus:ring-2 focus:ring-indigo-500 outline-none"
          value={inputString}
          onChange={(e) => setInputString(e.target.value)}
        />
        <button
          className="bg-indigo-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
          onClick={reverseString}
        >
          Inverter
        </button>
      </div>
      <p className="mt-4 text-lg text-gray-600">
        Resultado: <span className="font-bold text-indigo-600">{reversedString}</span>
      </p>
    </div>
  </div>
  
  );
}
