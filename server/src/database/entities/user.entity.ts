import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MailGrant } from "./mail-grant.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar", { unique: true })
    username: string;

    @Column("varchar")
    key: string;

    // Relations
    @OneToMany(() => MailGrant, (mailGrant) => mailGrant.userId)
    grants: MailGrant[];
}