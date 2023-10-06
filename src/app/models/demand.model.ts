import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Demand {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    decription: string;

    @Column()
    data: Date;
}