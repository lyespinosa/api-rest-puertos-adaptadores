import { User } from "../../Domain/Entity/User";

export interface EmailPort {
    run(use:User):Promise<void>;
}