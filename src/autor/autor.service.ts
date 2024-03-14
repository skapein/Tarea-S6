import { Injectable } from '@nestjs/common';
import { InterAutor } from './autor.interface';
import { v4 as uuidV4 } from 'uuid';
import { AutorDTO } from './autor.dto';

@Injectable()
export class AutorService {
    autor: InterAutor[] = [];

    todos() {
      return this.autor;
    }

    uno(id: string) {
      return this.autor.find((autor) => autor.id == id);
    }

    insertar(autor: AutorDTO) {
      const nuevoAutor = {
        id: uuidV4(),
        ...autor,
      };
      this.autor.push(nuevoAutor);
      return this.autor;
    }

    actualizar(id: string, autorActualizar: AutorDTO) {
      const nuevoAutor = { id, ...autorActualizar };
      this.autor = this.autor.map((autor) =>
        autor.id === id ? nuevoAutor : autor,
      );
      return nuevoAutor;
    }

    eliminar(id: string) {
      this.autor = this.autor.filter((autor) => autor.id !== id);
      return 'Autor eliminado con éxito';
    }
}
``
