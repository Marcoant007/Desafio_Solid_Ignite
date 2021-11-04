import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    try {
      const user = this.usersRepository.findById(user_id);
      if (!user) {
        throw new Error("User do not exists");
      }
      user.admin = true;
      return this.usersRepository.turnAdmin(user)
    } catch (error) {
      throw new Error(error.message)
    }

  }
}

export { TurnUserAdminUseCase };
