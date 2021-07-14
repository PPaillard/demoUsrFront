export class User{
  public mail:string
  public password:string

  constructor(mail:string, password:string){
  this.mail=mail
  this.password=password
  }

  public toString(): String {
    return `Le mail est ${this.mail} et le mot de passe est ${this.password}`
  }
} 