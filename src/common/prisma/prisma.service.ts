import { Inject, Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston'

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor(
        @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger,
    ) {
        super({
            log: [
                {
                    emit: "event",
                    level: 'info'
                },
                {
                    emit: "event",
                    level: 'warn'
                },
                {
                    emit: "event",
                    level: 'error'
                },
                {
                    emit: "event",
                    level: 'query'
                },
                
            ]
        });

    }

    onModuleInit() {
        this.$on('info', (e) => {
            this.logger.info(e);
        })
        this.$on('warn', (e) => {
            this.logger.info(e);
        })
        this.$on('error', (e) => {
            this.logger.info(e);
        })
        this.$on('query', (e) => {
            this.logger.info(e);
        })
        this.logger.info('PrismaService initialized and listeners registered.');
        return this.$connect()
    }

    async onModuleDestroy() {
        this.logger.info('Disconnecting PrismaService...');
        await this.$disconnect();
        this.logger.info('PrismaService disconnected.');
    }

    

}
