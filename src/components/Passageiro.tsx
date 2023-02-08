
interface Props {
  name: string;
  seat: string;
}

export function Passageiro({ name, seat }: Props) {
  return (
    <div
      className="flex flex-col w-10 h-10 rounded-3xl bg-white text-black justify-between items-center border-zinc-400 border-b-2 border-dashed"
      style={{ width: 327, height: 84 }}
    >
      <div className='flex flex-row justify-between items-center w-full'>
        <div className="mt-6 ml-8 flex flex-col justify-start items-start">
          <label className="h-4 text-sm text-zinc-600">Passageiro</label>
          <label className="text-base font-bold">{name}</label>
        </div>
        <div className="mt-6 mr-8 flex flex-col justify-end items-end">
          <label className="h-4 text-sm text-zinc-600">Assento</label>
          <label className="text-base font-bold">{seat}</label>
        </div>
      </div>

      <div>

      </div>

    </div>
  )
}
