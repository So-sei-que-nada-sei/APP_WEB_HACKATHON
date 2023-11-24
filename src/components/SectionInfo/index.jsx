import './SectionInfo.css'

import { FaBuilding, FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import CardInfo from "../CardInfo";

export default function SectionInfo() {
  return (
    <section>
      <CardInfo 
        titulo='Eventos ocorridos'
        quantidade={4565}
        periodo='Jan-Março 2023'
        icone={<FaRegCalendarAlt size={30}/>}
        bgCor='linear-gradient(to right, #8e44ad, #b8a6c9)'
      />
      <CardInfo
        titulo='Número de salas'
        quantidade={42}
        periodo='Jan-Março 2023'
        icone={<FaBuilding size={30}/>}
        bgCor='linear-gradient(to right, #eb5a7a, #e4bbc4)'
      />
      <CardInfo 
        titulo='Novos Usuários'
        quantidade={223}
        periodo='Jan-Março 2023'
        icone={<FaUsers size={30}/>}
        bgCor='linear-gradient(to right, #ee9348, #dfc8b5)'
      />
      <CardInfo 
        titulo='Taxa de ocupação'
        quantidade='67%'
        periodo='Jan-Março 2023'
        icone={<LuClock9 size={30}/>}
        bgCor='linear-gradient(to right, #2d6aee, #b4c4e6)'
      />
    </section>
  )
}