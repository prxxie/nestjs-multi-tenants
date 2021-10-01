import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum TenantTypes {
  TENANT = 20,
  SYSTEM = 99
}

@Entity()
export default class TenantEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  code: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ name: 'name_kana', type: 'varchar' })
  nameKana: string;

  @Column({ type: 'integer' })
  type: TenantTypes;

  @Column({ type: 'varchar' })
  database: string;

  @DeleteDateColumn({name: 'deleted_at'})
  deletedAt: Date;

  @CreateDateColumn({name: 'created_at'})
  createdAt: Date;

  @UpdateDateColumn({name: 'updated_at'})
  updatedAt: Date;
}