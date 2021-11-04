import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const usersRepository = this.usersRepository.findById(user_id);
    if(!usersRepository){
      throw new Error("User do not exists");
    }
    const user = new User();
    user.admin = true;
    this.usersRepository.turnAdmin(user)
    return user;
  }
}

export { TurnUserAdminUseCase };
