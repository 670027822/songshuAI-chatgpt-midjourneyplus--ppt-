import { Global, Module } from '@nestjs/common';
import { LunboController } from './lunbo.controller';
import { LunboService } from './lunbo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LunboEntity } from './lunbo.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([LunboEntity])],
  providers: [LunboService],
  controllers: [LunboController],
  exports: [LunboService],
})
export class LunboModule {}
