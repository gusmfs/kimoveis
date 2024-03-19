import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Address from "./addresses.entity";
import Schedule from "./schedules.entity";
import Categorie from "./categories.entity";

@Entity('realEstates')
export default class RealEstate{
    
    @PrimaryGeneratedColumn('increment')
    id : number 

    @Column({default: false})
    sold: boolean

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column()
    size: number
    
    @CreateDateColumn({type: "date" })
    createdAt: string
    
    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @OneToMany(()=> Schedule , (schedules) => schedules.realEstate)
    schedules: Array<Schedule>

    @OneToOne(() => Address , (address) => address.realEstate )
    @JoinColumn()
    address: Address
    
    @ManyToOne(() => Categorie , (categorie) => categorie.realEstate, {})
    category: Categorie
}   