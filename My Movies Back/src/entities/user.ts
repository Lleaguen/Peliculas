import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm' 

@Entity()
export class Users extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column()
    password: string
}