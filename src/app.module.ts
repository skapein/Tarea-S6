import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AutorModule } from './autor/autor.module';
import { LibroModule } from './libro/libro.module';
import { EscribeModule } from './escribe/escribe.module'
@Module({
  imports: [AutorModule, LibroModule, EscribeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
