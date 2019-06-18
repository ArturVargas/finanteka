
export class User {
    
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public img?: string,
        public facebook?: string,
        public google?: string,
        public _id?: string
    ){}
}