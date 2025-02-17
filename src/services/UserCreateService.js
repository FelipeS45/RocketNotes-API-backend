const {hash} = require("bcryptjs")
const AppError = require("../utils/AppError")

class UserCreateService {

  constructor(userRepository) {
    this.userRepository = userRepository // this - contexto global da classe (fica disponível para toda a classe). Todas as vezes que "userRepository" for usado na classe, tem que vir com "this" antes
  }

  async execute({name, email, password}) {
    const checkUserExists = await this.userRepository.findByEmail(email)

    if(checkUserExists){
      throw new AppError("Esse e-mail já está em uso!")
    }

    const hashedPassword = await hash(password, 8)

    const userCreated = await this.userRepository.create({name, email, password: hashedPassword})

    return userCreated
  }
}

module.exports = UserCreateService