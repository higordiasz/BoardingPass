import { Embarque } from './components/Embarque'
import { Passageiro } from './components/Passageiro'
import { Voo } from './components/Voo'
import './styles/global.css'

const data = {
  flight: {
    code: 'RS995',
    date: '23/05/2023',
    from: 'São Paulo, Brasil',
    destined: 'São Francisco, EUA',
    departureTime: '17:00',
    arrivalTime: '04:48',
    seat: '28A'
  },
  passenger: {
    name: 'Higor Dias Zuqueto'
  },
  boarding: {
    time: '16:15',
    closeGate: '16:45',
    terminal: 2,
    gate: 15,
    group: 3
  }
}

function App() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='flex flex-col justify-center items-center' style={{ width: 327 }}>
        <div className='w-full flex justify-center items-center mb-5'>
          <label className='font-bold text-white text-xl' >Cartão de embarque</label>
        </div>
        <Voo
          flight={data.flight.code}
          date={data.flight.date}
          from={data.flight.from}
          destined={data.flight.destined}
          departureTime={data.flight.departureTime}
          arrivalTime={data.flight.arrivalTime}
        />
        <Passageiro
          name={data.passenger.name}
          seat={data.flight.seat}
        />
        <Embarque
          time={data.boarding.time}
          closeGate={data.boarding.closeGate}
          terminal={data.boarding.terminal}
          gate={data.boarding.gate}
          group={data.boarding.group}
        />
        <div className='flex flex-col justify-center items-center mt-5'>
          <label className='text-white text-xs' >Qualquer problema procure o balcão de</label>
          <label className='text-white text-xs' >atendimento da sua companhia aéria</label>
        </div>
      </div>
    </div>
  )
}

export default App
