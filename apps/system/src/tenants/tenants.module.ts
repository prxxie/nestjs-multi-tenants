import { Module } from '@nestjs/common';
import { TenantsService } from './tenants.service';
import { TenantsController } from './tenants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantRepository } from 'apps/system/src/tenants/tenant.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TenantRepository])],
  controllers: [TenantsController],
  providers: [TenantsService]
})
export class TenantsModule { }
