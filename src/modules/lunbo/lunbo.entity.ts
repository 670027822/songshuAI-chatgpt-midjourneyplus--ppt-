import { Check, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'lunbo' })
export class LunboEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ length: 255, comment: '名称', nullable: true })
  name: string;

  
  @Column({ length: 3000, comment: '图片地址', nullable: true })
  url: string;
}
