import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";


class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const userById = this.showUserProfileUseCase.execute({ user_id });
      return response.send(userById);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }
}

export { ShowUserProfileController };
