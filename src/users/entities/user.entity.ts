/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: string;

  @Column()
  address: string;

  @Column()
  github: string;
}
