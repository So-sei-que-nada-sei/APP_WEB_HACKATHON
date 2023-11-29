import { FaEdit, FaRegFileAlt, FaTrashAlt } from "react-icons/fa";
import "./SectionUsuarios.css";

export default function SectionUsuarios() {
  return (
    <aside>
      <div className="d-flex justify-content-between">
        <h1>Usuários</h1>
        <button type="button" className="btn btn-primary w-10">
          Incluir
        </button>
      </div>
      <hr />
      <table className="table p-0">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Nome</th>
            <th scope="col">E-mail</th>
            <th scope="col">Telefone</th>
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
              <span></span>
            </td>
            <td>Ruan Gomes</td>
            <td>ruangomes@digital.com</td>
            <td>85-23456789</td>
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
              <span> </span>
            </td>
            <td>Lucivando Sousa </td>
            <td>lucivandosousa@digital.com</td>
            <td>85-12345678</td>
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
              <span></span>
            </td>
            <td>Ademir Patricio</td>
            <td>ademirparicio@digital.com</td>
            <td>85-87654321</td>
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
              <span></span>
            </td>
            <td>Suellen Magalhães</td>
            <td>suellenmagalhaes@digital.com</td>
            <td>85-98765432</td>
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
              <span></span>
            </td>
            <td>Éden Saulo</td>
            <td>edensaulo@digital.com</td>
            <td>85-34567890</td>
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
