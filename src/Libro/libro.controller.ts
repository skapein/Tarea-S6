import { Controller, Get, Post, Put, Delete, Body, Param, ValidationPipe } from '@nestjs/common';
import { LibroService } from './libro.service';
import { LibroDTO } from './libro.dto';
import { InterLibro } from './libro.interface';

@Controller('libro')
export class LibroController {
  constructor(private libroServicio: LibroService) {}

  @Get()
  async todos(): Promise<InterLibro[]> {
    return await this.libroServicio.todos();
  }

  @Get(':id_libro')
  async uno(@Param('id_libro') id_libro: string): Promise<InterLibro> {
    return await this.libroServicio.uno(id_libro);
  }

  @Post()
  async insertar(@Body(new ValidationPipe()) libroDTO: LibroDTO): Promise<InterLibro> {
    return await this.libroServicio.insertar(libroDTO);
  }

  @Put(':id_libro')
  async actualizar(@Param('id_libro') id_libro: string, @Body(new ValidationPipe()) libroDTO: LibroDTO): Promise<InterLibro> {
    return await this.libroServicio.actualizar(id_libro, libroDTO);
  }

  @Delete(':id_libro')
  async eliminar(@Param('id_libro') id_libro: string): Promise<string> {
    return await this.libroServicio.eliminar(id_libro);
  }
}
