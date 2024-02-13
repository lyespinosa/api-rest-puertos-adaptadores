import { User } from "../../Domain/Entity/User";
import { EmailPort } from "./EmailPort";

//TODO: IMPLEMENTAR EL ENVIO DEL CORREO CON CUALQUIER HERRAMIENTA
export class EmailService implements EmailPort {
    
    async run(user:User) {
        try {
            
        }catch(error) {

        }
    }

}