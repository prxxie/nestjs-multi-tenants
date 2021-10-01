import { DatabaseModule } from '@app/database';
import TenantEntity from '@app/database/entities/system/tenant.entity';
import { TenantRepository } from 'apps/system/src/tenants/tenant.repository';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemController } from './system.controller';
import { SystemService } from './system.service';
import { TenantsModule } from './tenants/tenants.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mariadb',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE_NAME,
      entities: [ TenantEntity ],
      synchronize: true,
    }),
    TenantsModule
  ],
  controllers: [SystemController],
  providers: [SystemService],
})
export class SystemModule { }
