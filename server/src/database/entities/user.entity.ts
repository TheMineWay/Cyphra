import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { unique: true })
    username: string;

    @Column("varchar")
    key: string;
}