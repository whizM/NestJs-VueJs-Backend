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
  cep: string;

  @Column()
  street: string;

  @Column()
  neighbourhood: string;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  github: string;

  @Column()
  githubId: number;
  
  @Column()
  nameUser: string;
  
  @Column()
  avatar_url: string;
  
  @Column()
  bio: string;
}

