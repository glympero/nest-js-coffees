import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

// @Index(['name', 'type']) //composite index (multiple columns)
@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Index() //single column index
  @Column()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
