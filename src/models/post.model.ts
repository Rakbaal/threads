import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Post extends BaseEntity {

    @PrimaryGeneratedColumn()
    _id? : number

    @Column()
    thread_id? : number

    @Column()
    user_id? : number

    @Column()
    message? : string


    @Column("timestamp",{default: () => "NOW()"})
    createAt? : Date

}