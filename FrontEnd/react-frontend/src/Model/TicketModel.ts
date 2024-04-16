class TicketModel {

     id:number;
     relatedTo:string;
     userId:number;
     username:string | undefined;
     role:string | undefined;
     createdTime:Date;
     updatedTime:Date;
     status:string;
     description:string;
     subject:string;

    constructor(id:number, relatedTo:string, user:{ userId: number, userName: string,roel:string }, createdTime:Date, updatedTime:Date, status:string, description:string, subject:string) {
        this.id = id;
        this.relatedTo = relatedTo;
        this.userId = user.userId;
        this.username = user.userName;
        this.role = user.roel;
        this.createdTime = createdTime;
        this.updatedTime = updatedTime;
        this.status = status;
        this.description = description;
        this.subject = subject;
    }

}
export default TicketModel;
