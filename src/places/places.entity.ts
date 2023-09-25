
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('place') 
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 45 })
  Ref: string;

  @Column({ type: 'varchar', length: 45})
  pricePerDay: string;

  @Column({ type: 'varchar', length: 255 })
  Description: string;

  @Column({ type: 'varchar', length: 255 })
  Location: string;

  @Column({ type: 'varchar', length: 255 })
  Image: string;
}
