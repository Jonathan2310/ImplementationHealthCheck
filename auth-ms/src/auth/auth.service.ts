import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';

@Injectable()
export class AuthService {
  create(createAuthDto: CreateAuthDto) {
    // Simula la creación de un usuario sin guardar en la base de datos
    return { message: 'User created', user: createAuthDto };
  }

  findAll() {
    // Simula la obtención de todos los usuarios sin acceder a la base de datos
    return [{ id: 1, name: 'John Doe', email: 'john.doe@example.com' }];
  }

  findOne(id: number) {
    // Simula la obtención de un usuario por ID sin acceder a la base de datos
    return { id, name: 'John Doe', email: 'john.doe@example.com' };
  }

  verify(id: number) {
    // Simula la verificación de un usuario por ID sin acceder a la base de datos
    return `Verifying user with id ${id}`;
  }
}