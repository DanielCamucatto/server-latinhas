import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Demamd {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    decription: string;

    @Column()
    data: Date;
}