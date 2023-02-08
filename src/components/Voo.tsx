import { AirplaneTilt } from 'phosphor-react'

interface Props {
  flight: string;
  date: string;
  from: string;
  destined: string;
  departureTime: string;
  arrivalTime: string;
}

export function Voo(props: Props) {
  return (
    <div
      className="flex flex-col w-10 h-10 rounded-3xl bg-white text-black justify-between items-center border-zinc-400 border-b-2 border-dashed"
      style={{ width: 327, height: 191 }}
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <div className="mt-6 ml-8 flex flex-col justify-start items-start">
          <label className="h-4 text-sm text-zinc-600">Voo</label>
          <label className="text-base font-bold">{props.flight}</label>
        </div>
        <div className="mt-6 mr-8 flex flex-col justify-end items-end">
          <label className="h-4 text-sm text-zinc-600">Data</label>
          <label className="text-base font-bold">{props.date}</label>
        </div>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <div className="mb-6 ml-8 flex flex-col justify-start items-start">
          <label className="mb-0 text-sm text-zinc-600">{props.from}</label>
          <label className="mt-0 text-4xl font-bold">GRU</label>
          <label className="mb-0 text-base font-semibold">{props.departureTime}</label>
        </div>
        <div className='w-6 h-6 mb-5'>
          <AirplaneTilt size={24} />
        </div>
        <div className="mb-6 mr-8 flex flex-col justify-start items-end">
          <label className="mb-0 text-sm text-zinc-600">{props.destined}</label>
          <label className="mt-0 text-4xl font-bold">SFO</label>
          <label className="mb-0 text-base font-semibold">{props.arrivalTime}</label>
        </div>
      </div>
    </div>
  )
}
