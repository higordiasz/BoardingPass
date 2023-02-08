import QRCode from "react-qr-code";

interface Props {
  time: string;
  closeGate: string;
  terminal: number;
  gate: number;
  group: number;
}

export function Embarque({ time, closeGate, terminal, gate, group }: Props) {
  const value = `${time}&${closeGate}&${terminal}&${gate}&${group}`
  return (
    <div
      className="flex flex-col w-10 h-10 rounded-3xl bg-white text-black justify-between items-center"
      style={{ width: 327, height: 269 }}
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <div className="mt-6 ml-8 flex flex-col justify-start items-start">
          <label className="mt-2 h-4 text-sm text-zinc-600">Embarque</label>
          <label className="text-white text-base font-bold bg-violet-700 rounded-lg p-1 mt-2">{time}</label>
          <label className="mt-2 h-4 text-sm text-zinc-600">Terminal</label>
          <label className="text-base font-bold">{terminal}</label>
          <label className="mt-2 h-4 text-sm text-zinc-600">Portão</label>
          <label className="text-base font-bold">{gate}</label>
        </div>
        <div className="mt-6 mr-8 flex flex-col justify-center items-center">
          <QRCode
            size={160}
            style={{ height: "160", width: "160", padding: "10" }}
            value={value}
            viewBox={`0 0 160 160`}
          />
          <label className="mt-2 h-4 text-sm text-zinc-600">Grupo de embarque: {group}</label>
        </div>
      </div>
      <div className="mb-4">
        <label className="text-base font-bold">Atenção:</label>
        <label className="mt-2 h-4 text-sm text-zinc-800"> o portão fecha {closeGate}</label>
      </div>
    </div>
  )
}
