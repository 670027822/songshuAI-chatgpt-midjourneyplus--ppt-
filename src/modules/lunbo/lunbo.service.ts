import { LunboEntity } from './lunbo.entity';
import { UserService } from './../user/user.service';
import { ModelsService } from './../models/models.service';
import { ChatLogEntity } from './../chatLog/chatLog.entity';
import { Global, HttpException, HttpStatus, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Like, MoreThan, Not, Repository } from 'typeorm';
import { getDiffArray, hideString } from '@/common/utils';
import axios from 'axios';
import * as fs from 'fs';
import { Request, Response } from 'express';

export class LunboService {
  constructor(
    @InjectRepository(LunboEntity)
    private readonly lunboEntity: Repository<LunboEntity>,
  ) {}

  async getLunboData(req: Request, res: Response) {
    const lunboRepository = await this.lunboEntity.find();
    const lunboDataString = JSON.stringify(lunboRepository);
    res.send(lunboDataString);
  }

}
