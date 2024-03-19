import { User } from "../entities";
import {
  UserCreate,
  UserRead,
  UserReturn,
  UserUpdate,
} from "../interfaces/users.interface";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas/users.schema";

export const createUserService = async (
  data: UserCreate
): Promise<UserReturn> => {
  const user: User = userRepo.create(data);

  const newuser = await userRepo.save(user);

  return userReturnSchema.parse(newuser);
};

export const readAllUsersService = async (): Promise<UserRead> => {
  const users: User[] = await userRepo.find();

  return userReadSchema.parse(users);
};

export const updateUserService = async (
  data: UserUpdate,
  user: User
): Promise<UserReturn> => {
  const userUpdate: User = userRepo.create({ ...user, ...data });
  const newUser = await userRepo.save(userUpdate);
  return userReturnSchema.parse(newUser);
};

export const softDeleteUserService = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};
