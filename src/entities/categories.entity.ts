import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstates.entity";

@Entity('categories')
export default class Category{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({length: 45, unique: true, nullable: false})
    name: string
    
    @OneToMany(() => RealEstate, (realEstate) => realEstate.category )
    realEstate: Array<RealEstate>
}