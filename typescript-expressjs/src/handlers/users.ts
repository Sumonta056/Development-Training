import { Request, Response } from "express";
import { CreateUserDto } from "../body-query-params/dtos/CreateUser.dto";
import { CreateUserQueryParams } from "../body-query-params/type/query-params";
import { CreateUserParams } from "../body-query-params/params/CreateUserId";
import { User } from "../body-query-params/type/response";

export function getUsers(req: Request, res: Response) {
  res.send("Hello Users");
}

export function getUserById(req: Request, res: Response) {
  res.send(`Your are logged on as user-id ${req.params.id}`);
}

export function createUsers(
  req: Request<CreateUserParams, {}, CreateUserDto, CreateUserQueryParams>,
  res: Response<User>
) {
  // CreateUserDto helps to set the username as body
  req.body.username = "John Doe";
  // CreateUserQueryParams helps to set the loginAfterCreate as query
  req.query.loginAfterCreate = true;
  // CreateUserParams helps to set the id as params
  req.params.id = 123;

  //send the response based on User type
  res.status(201).send({
    id: 123,
    username: "John Doe",
    email: "sumonta@gmail.com",
  });
}
