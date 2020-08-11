export class Books{
    id:string;
    title:string;
    author:string;
    
    constructor(title:string, author:string, isbn:string){
        this.author = author;
        this.id = isbn;
        this.title = title;

    }
}