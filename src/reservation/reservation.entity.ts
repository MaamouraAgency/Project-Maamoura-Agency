import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
//import { User } from './user.entity'; // Import the User entity if not already imported
import { Place } from '../places/places.entity'; // Import the Place entity if not already imported

@Entity('reservation')
export class Reservation {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'boolean' })
  Confirmation: boolean;

  @Column({ type: 'date' }) 
  Datestart: Date;

  @Column({ type: 'date' }) 
  Dateend: Date;

  @Column({ type: 'int' })
  user_id: number;

  //@ManyToOne(() => User, (user) => user.reservations)
  //@JoinColumn({ name: 'user_id' })
  //user: User; // Define a relationship with the User entity

  @ManyToOne(() => Place, (place) => place.reservations)
  @JoinColumn({ name: 'place_id' })
  place: Place; 
}
