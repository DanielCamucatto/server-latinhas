import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Demand } from "src/app/models/demand.model";
import { DemandsController } from "./demands.controller"; 
import { DemandsService } from 'src/app/services/demands.service'; 

@Module({
    imports: [TypeOrmModule.forFeature([Demand])], 
    controllers: [ DemandsController], 
    providers: [DemandsService]
})

export class demandsModules {}