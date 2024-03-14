import {
    Controller,
    Body,
    Delete,
    Get,
    Param,
    Post,
    Put,
    UsePipes,
    ValidationPipe,
  } from '@nestjs/common';
  import { AutorService } from './autor.service';
  import { InterAutor } from './autor.interface';
  import { AutorDTO } from './autor.dto';
  @Controller('autor')
  export class AutorController {
    constructor(private autorServicio: AutorService) {}
  
    @Get()
    todos() {
      return this.empleadoServicio.todos();
    }
  
    @Get(':id')
    uno(@Param('id') id: string) {
      return this.autorServicio.uno(id);
    }
    @Post()
    insertar(@Body() autor: AutorDTO) {
      return this.autorServicio.insertar(autor);
    }
    @Put(':id')
    actualizar(@Param('id') id: string, @Body() autor: AutorDTO) {
      return this.autorServicio.actualizar(id, autor);
    }
    @Delete(':id')
    eliminar(@Param('id') id: string) {
      return this.autorServicio.eliminar(id);
    }
  }
  