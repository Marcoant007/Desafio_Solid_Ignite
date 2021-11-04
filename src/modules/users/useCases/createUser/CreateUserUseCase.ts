import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ email, name }: IRequest): User {
    try {
      const userAlreadyExists = this.usersRepository.findByEmail(email);
      if (userAlreadyExists) {
        throw new Error("User already exists")
      };

      const createUser = this.usersRepository.create({ email, name });
      return createUser;
    } catch (error) {

    }
  }
}

export { CreateUserUseCase };
