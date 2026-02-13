import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class MailGrant {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("varchar")
    userId: string;

    @Column('varchar', { unique: true })
    key: string;

    // Associations
    @ManyToOne(() => User, (user) => user.grants)
    user: User;
}