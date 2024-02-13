import { UserInterface } from "../../Domain/Port/UserInterface";

export class ActivateUserUseCase {
    constructor(readonly repository:UserInterface){}

    run(token:string) {
        
    }
}