import {usuarios} from "../../constants/usuarios";
import Usuario from "../model/Usuario";

export default function loginUsuario(email: string, senha: string): Usuario {
    const usuario = usuarios.find((usuario) => usuario.email === email && usuario.senha === senha);

    if (!usuario) {
        throw new Error('Usuário não foi encontrado');
    }

    if (usuario.senha !== senha) {
        throw new Error('Usuário ou senha inválidos')
    }

    return usuario
}