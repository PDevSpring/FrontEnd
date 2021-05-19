export class Token {
    
        jwt:string ; 

    constructor(response : any){
        this.jwt=response.jwt; 
    }    

}