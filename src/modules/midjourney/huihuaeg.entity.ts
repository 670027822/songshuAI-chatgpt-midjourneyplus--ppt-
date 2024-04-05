import { UserStatusEnum } from '../../common/constants/user.constant';
import { Check, Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'huihuaeg' })
export class HuihuaegEntity extends BaseEntity {

  @Column({ comment: '名称', nullable: true })
  name: string;

  @Column({ comment: '提示词', nullable: true,  type: 'text' })
  prompt: string;

  @Column({ comment: '提示词图片url', nullable: true, type: 'text' })
  src: string;


}