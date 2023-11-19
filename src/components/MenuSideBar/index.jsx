import './MenuSideBar.css'

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";

export default function MenuSideBar() {
  return (
    <div className='container-sidebar'>
      <p>Menu</p>
      <ul>
        <li><a href="#"><AiOutlineDashboard /> Dashboard</a></li>
        <li><a href="#"><FaRegCalendarAlt /> Eventos</a></li>
        <li><a href="#"><FaUsers /> Usuários</a></li>
        <li><a href="#"><FaBuilding /> Salas</a></li>
      </ul>
    </div>
  )
}