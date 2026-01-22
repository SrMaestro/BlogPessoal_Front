import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { ToastAlerta } from "../../utils/ToastAlerta";

function Navbar() {
  const navigate = useNavigate();
  const { handleLogout } = useContext(AuthContext);

  function sair() {
    handleLogout();
    ToastAlerta('O Usuário foi desconectado com sucesso!', 'info')
    navigate("/");
  }

  return (
    <>
      <div
        className="w-full flex justify-center py-4
            			   bg-indigo-900 text-white"
      >
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>

          <div className="flex gap-4">
            <Link to={"/postagens"} className="hover:underline">
              Postagens
            </Link>
            <Link to={"/temas"} className="hover:underline">
              Temas
            </Link>
            <Link to="/cadastrartema" className="hover:underline">
              Cadastrar tema
            </Link>
            <Link to='/perfil' className='hover:underline'>Perfil</Link>
            <Link to="" onClick={sair} className="hover:underline">
              {" "}
              Sair{" "}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
