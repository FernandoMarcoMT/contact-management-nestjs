import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { UserModule } from './user/user.module';
import { PrismaService } from './common/prisma/prisma.service';

@Module({
  imports: [CommonModule, UserModule],
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService]
  
})
export class AppModule {}
