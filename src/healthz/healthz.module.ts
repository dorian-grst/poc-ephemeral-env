import { Module } from '@nestjs/common';
import { HealthzController } from './healthz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TerminusModule } from '@nestjs/terminus';
import { User } from 'src/user/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      username: process.env.DB_USERNAME,
      entities: [User],
      database: process.env.DB_NAME,
      synchronize: true,
      logging: true,
    }),
    TerminusModule,
  ],
  controllers: [HealthzController],
})
export class HealthzModule {}
