import { Contact } from "./Contact";
import { Credential } from "./Credential";
import { Status } from "./Status";

//TODO: VALIDATIONS CON DECORADORES
export class User {

    public uuid:string;
    public contact:Contact;
    public credentials:Credential;
    public status:Status;

    constructor(
        contact:Contact,
        credentials:Credential,
        status:Status
    ) {
        this.uuid = this.generateUuid();
        this.contact = contact;
        this.credentials = credentials;
        this.status = status;
    }

    generateUuid():string {
        return "";
    }



}