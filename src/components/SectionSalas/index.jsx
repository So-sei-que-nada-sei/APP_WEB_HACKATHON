import { FaEdit, FaRegFileAlt, FaTrashAlt } from "react-icons/fa";
import "./SectionSalas.css";

export default function SectionSalas() {
  return (
    <aside>
      <div className="d-flex justify-content-between">
        <h1>Salas</h1>
        <button type="button" className="btn btn-primary w-10">
          Incluir
        </button>
      </div>
      <hr />
      <table className="table p-0">
        <thead>
          <tr>
            <th scope="col">Responsável</th>
            <th scope="col">Nome da Sala</th>
            <th scope="col">Assunto</th>
            <th scope="col">Capacidade Máxima de Pessoas</th>
            <th scope="col">Data de Criação</th>
            <th scope="col">Editar</th>
            <th scope="col">Detalhar</th>
            <th scope="col">Excluir</th>
          </tr>
        </thead>
        <tbody>
          {/* 1 */}
          <tr>
            <td>
              <img
                className="image-avatar"
                src="https://avatars.githubusercontent.com/u/67665127?v=4"
                alt=""
              />
              <span>Ruan Gomes</span>
            </td>
            <td>Sala B</td>
            <td>Fundamentos React</td>
            <td>50 pessoas</td>
            <td>23/01/2024</td>
            <td>
              <FaEdit size={20} color="black" />
            </td>
            <td>
              <FaRegFileAlt size={20} color="black" />
            </td>
            <td>
              <FaTrashAlt size={20} color="black" />
            </td>
          </tr>
          {/* 2 */}
          <tr>
            <td>
              <img
                className="image-avatar"
                src="https://avatars.githubusercontent.com/u/14998480?v=4"
                alt=""
              />
              <span>Lucivando Sousa </span>
            </td>
            <td>Sala D</td>
            <td>Git e Github</td>
            <td>50 pessoas</td>
            <td>23/03/2024</td>
            <td>
              <FaEdit size={20} color="black" />
            </td>
            <td>
              <FaRegFileAlt size={20} color="black" />
            </td>
            <td>
              <FaTrashAlt size={20} color="black" />
            </td>
          </tr>
          {/* 3 */}
          <tr>
            <td>
              <img
                className="image-avatar"
                src="https://avatars.githubusercontent.com/u/135185888?s=70&v=4"
                alt=""
              />
              <span>Ademir Patricio</span>
            </td>
            <td>Sala F</td>
            <td>HTML e CSS</td>
            <td>50 pessoas</td>
            <td>07/05/2024</td>
            <td>
              <FaEdit size={20} color="black" />
            </td>
            <td>
              <FaRegFileAlt size={20} color="black" />
            </td>
            <td>
              <FaTrashAlt size={20} color="black" />
            </td>
          </tr>
          {/* 4 */}
          <tr>
            <td>
              <img
                className="image-avatar"
                src="https://avatars.githubusercontent.com/u/117091949?s=70&v=4"
                alt=""
              />
              <span>Suellen Magalhães</span>
            </td>
            <td>Sala J</td>
            <td>Logica de Programação com JavaScritp</td>
            <td>50 pessoas</td>
            <td>03/01/2024</td>
            <td>
              <FaEdit size={20} color="black" />
            </td>
            <td>
              <FaRegFileAlt size={20} color="black" />
            </td>
            <td>
              <FaTrashAlt size={20} color="black" />
            </td>
          </tr>
          {/* 5 */}
          <tr>
            <td>
              <img
                className="image-avatar"
                src="https://avatars.githubusercontent.com/u/59475271?s=70&v=4"
                alt=""
              />
              <span>Éden Saulo</span>
            </td>
            <td>Sala k</td>
            <td>Orientação Objeto com Java</td>
            <td>50 pessoas</td>
            <td>10/06/2024</td>
            <td>
              <FaEdit size={20} color="black" />
            </td>
            <td>
              <FaRegFileAlt size={20} color="black" />
            </td>
            <td>
              <FaTrashAlt size={20} color="black" />
            </td>
          </tr>
        </tbody>
      </table>
    </aside>
  );
}
