import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import { PrismaService } from './prisma/prisma.service';
import { ValidationService } from './validation/validation.service';
import * as winston from "winston";

@Global()
@Module({
    imports: [
        WinstonModule.forRoot({
            format: winston.format.json(),
            transports: [
                new winston.transports.Console()
            ]
        }), 
        ConfigModule.forRoot({
            isGlobal: true
        })
],
    providers: [PrismaService, ValidationService],
    exports: [PrismaService, ValidationService]
    
})
export class CommonModule {}
