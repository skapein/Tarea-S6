import {
    IsDate,
    IsEmail,
    IsEmpty,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class AutorDTO {
    @IsNotEmpty({ message: 'Campo obligatorio' })
    @IsString({ message: 'Escriba el nombre del autor' })
    nombre: string;
    @IsNotEmpty({ message: 'Campo obligatorio' })
    @IsString({ message: 'Escriba la nacionalidad del autor' })
    nacionalidad: string;
    @IsNotEmpty({ message: 'Campo obligatorio' })
    anio_nacimiento: Date;
    @IsNotEmpty({ message: 'Campo obligatorio' })
    @IsString({ message: 'Escriba el género del autor' })
    genero: string;

  }