import { Injectable } from '@nestjs/common';
import { InterLibro } from './libro.interface';
import { v4 as uuidV4 } from 'uuid';
import { LibroDTO } from './libro.dto';

@Injectable()
export class LibroService {
    libro: InterLibro[] = [];
    todos() {
      return this.libro;
    }
    uno(id_libro: string) {
      return this.libro.find((libro) => libro.id_libro == id_libro);
    }
    insertar(libro: LibroDTO) {
      const nuevoLibro = {
        id_libro: uuidV4(),
        ...libro,
      };
      this.libro.push(nuevoLibro);
      return this.libro;
    }
    actualizar(id_libro: string, libroActualizar: LibroDTO) {
      const nuevoLibro = { id_libro, ...libroActualizar };
      this.libro = this.libro.map((libro) =>
      libro.id_libro === id_libro ? nuevoLibro : libro,
      );
      return nuevoLibro;
    }
    eliminar(id_libro: string) {
      this.libro = this.libro.filter((libro) => libro.id_libro !== id_libro);
      return 'Libro Eliminado con Exito';
    }
}
