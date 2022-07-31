import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  language: string;

  @Column()
  country: string;

  @Column()
  published: string;

  @Column()
  imdb_rating: number;
}