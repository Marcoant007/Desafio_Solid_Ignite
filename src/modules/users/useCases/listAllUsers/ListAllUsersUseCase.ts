import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }): User[] {
   
      const userId = this.usersRepository.findById(user_id);
      const users = this.usersRepository.list();
      if (!userId) {
        throw new Error("User do not exists")
      }

      if (!userId.admin) {
        throw new Error("User not admin")
      }
      return users
  
  }
}

export { ListAllUsersUseCase };
