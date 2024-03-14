// escribe.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { EscribeService } from './escribe.service';
import { EscribeDTO } from './escribe.dto';

@Controller('escribe')
export class EscribeController {
  constructor(private readonly escribeService: EscribeService) {}

  @Get()
  async findAll(): Promise<Escribe[]> {
    return this.escribeService.findAll();
  }

  @Post()
  async create(@Body() createEscribeDto: EscribeDTO): Promise<Escribe> {
    return this.escribeService.create(createEscribeDto);
  }
}
