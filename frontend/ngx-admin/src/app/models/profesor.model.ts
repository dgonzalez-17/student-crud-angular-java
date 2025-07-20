export class Profesor {
    id?:string;
    name?:string;
    subject?: any;

    constructor(id?:string, name?:string, subject_id?:any){
        this.id = id;
        this.name = name;
        this.subject = subject_id;
    }

}

