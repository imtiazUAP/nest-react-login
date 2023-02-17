import { Controller, Get, Req, Res } from '@nestjs/common';
import { Request, Response } from 'express';
import { NextService } from './next.service';

@Controller('/')
export class NextController {
  constructor(private nextService: NextService) {}

  @Get('*')
  public async index(@Req() req: Request, @Res() res: Response) {
    await this.nextService.handler(req, res);
  }
}
