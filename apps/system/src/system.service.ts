import TenantEntity from '@app/database/entities/system/tenant.entity';
import { TenantRepository } from 'apps/system/src/tenants/tenant.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SystemService {

  getHello(): string {
    return 'hello';
  }
}
