import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';

export class LibroDTO {
  @IsNotEmpty({ message: 'El ID del libro es requerido' })
  @IsString({ message: 'El ID del libro debe ser un texto' })
  id_libro: string;

  @IsNotEmpty({ message: 'El título del libro es requerido' })
  @IsString({ message: 'El título del libro debe ser un texto' })
  titulo: string;

  @IsNotEmpty({ message: 'El género del libro es requerido' })
  @IsString({ message: 'El género del libro debe ser un texto' })
  genero: string;

  @IsNotEmpty({ message: 'El año de publicación es requerido' })
  @IsNumber({}, { message: 'El año de publicación debe ser un número' })
  anio_publicacion: number;

  @IsNotEmpty({ message: 'La editorial del libro es requerida' })
  @IsString({ message: 'La editorial del libro debe ser un texto' })
  editorial: string;

  @IsNotEmpty({ message: 'La fecha de publicación es requerida' })
  @IsDate({ message: 'La fecha de publicación debe ser una fecha' })
  fecha_publicacion: Date;
}
