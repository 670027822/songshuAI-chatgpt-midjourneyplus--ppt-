import { UserStatusEnum } from '../../common/constants/user.constant';
import { Check, Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'tishici' })
export class TishiciEntity extends BaseEntity {

  @Column({ comment: '提示词名称', nullable: true })
  name: string;

  @Column({ comment: '提示词分类', nullable: true, default: '默认' })
  fenlei: string;

  @Column({ comment: '提示词图片base64', nullable: true, type: 'longtext' })
  src: string;


}
