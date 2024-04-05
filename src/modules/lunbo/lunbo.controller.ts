import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LunboService } from './lunbo.service';
import { Body, Controller, Get, Post, Query, Req, UseGuards, Res } from '@nestjs/common';
import { Request } from 'express';

@ApiTags('lunbo')
@Controller('lunbo')
export class LunboController {
  constructor(private readonly lunboService: LunboService) {}

  @ApiOperation({ summary: '获取当前轮播图' })
  @Get('/')
  getLunboData(@Query() query: any, @Req() req: Request, @Res() res: any) {
    console.log('biaoji12');
    return this.lunboService.getLunboData(req, res);
  }
}
