import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class demandsEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string

    @Column()
    description: string;

    @Column()
    deadline: Date;

}