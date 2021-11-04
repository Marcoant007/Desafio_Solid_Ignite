import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const turnAdmin = this.turnUserAdminUseCase.execute({ user_id });
      return response.status(201).send(turnAdmin);
    } catch (error) {
      return response.status(400).send(error.message);
    }
  }
}

export { TurnUserAdminController };
