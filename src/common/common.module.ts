import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { PrismaService } from './prisma/prisma.service';
import { ValidationService } from './validation/validation.service';
import * as winston from 'winston';
import { APP_FILTER } from '@nestjs/core';
import { ErrorFilter } from './error.filter';

@Global()
@Module({
  imports: [
    WinstonModule.forRoot({
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    PrismaService, 
    ValidationService,
    {
      provide: APP_FILTER,
      useClass: ErrorFilter
    }
  ],
  exports: [PrismaService, ValidationService],
})
export class CommonModule {
  constructor() {
    console.log(process.env.DATABASE_URL)
  }
}
