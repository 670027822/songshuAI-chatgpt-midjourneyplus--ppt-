import { Global, Module } from '@nestjs/common';
import { MidjourneyController } from './midjourney.controller';
import { MidjourneyService } from './midjourney.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MidjourneyEntity } from './midjourney.entity';
import { UserEntity } from '../user/user.entity';
import { RedisCacheService } from '../redisCache/redisCache.service';
import { mjPromptEntity } from './prompt.entity';
import { TishiciEntity } from './tishici.entity';
import { HuihuaegEntity } from './huihuaeg.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([MidjourneyEntity, UserEntity, mjPromptEntity, TishiciEntity, HuihuaegEntity])],
  controllers: [MidjourneyController],
  providers: [MidjourneyService, RedisCacheService],
  exports: [MidjourneyService],
})
export class MidjourneyModule { }
