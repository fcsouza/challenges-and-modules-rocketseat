import { Request, Response } from 'express';
import createUser from './services/CreateUser';

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'fabricio.unix@gmail.com',
    password: '123456',
    techs: ['Node.js', 'ReactJS'],
  });

  console.log(user);

  return response.json({ message: 'Hello World' });
}