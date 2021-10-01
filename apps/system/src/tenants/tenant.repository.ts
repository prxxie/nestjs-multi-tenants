import TenantEntity from "@app/database/entities/system/tenant.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(TenantEntity)
export class TenantRepository extends Repository<TenantEntity> {}