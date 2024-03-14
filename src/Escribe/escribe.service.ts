import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Escribe } from './interfaces/escribe.interface';
import { EscribeDTO } from './dto/escribe.dto';

@Injectable()
export class EscribeService {
  private escribe: Escribe[] = [];

  findAll(): Escribe[] {
    return this.escribe;
  }

  create(createEscribeDto: EscribeDTO): Escribe {
    const escribe: Escribe = {
      id: uuidv4(),
      id_autor: createEscribeDto.id_autor,
      id:libro: createEscribeDto.id_libro,
    };
    this.escribe.push(escribe);
    return escribe;
  }
}
