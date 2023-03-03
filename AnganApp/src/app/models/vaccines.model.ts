export class vaccines{
    vid:number;
    vname:string;
    vfor:string;
    
}
export class dosages{
    did:number;
    vid:number;
    dn:number;
    start:number;
}
export class vaccinations{
    tid:number;
    vid:number;
    did:number;
    uid:number;
    uname:string;
    status:boolean;
    date:Date;
}