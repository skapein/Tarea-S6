import { Module } from '@nestjs/common';
import { EscribeController } from './escribe.controller';
import { EscribeService } from './escribe.service';

@Module({
  controllers: [EscribeController],
  providers: [EscribeService]
})
export class EscribeModule {}
