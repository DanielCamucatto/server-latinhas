import { Module } from "@nestjs/common";
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Demamd } from "src/app/models/demand.model";
import { DemandsController } from 'src/app/controllers/demands.controllers'; 
import { DemandsService } from 'src/app/services/demands.service'; 

@Module({
    imports: [TypeOrmModule.forFeature([Demamd])], 
    controllers: [ DemandsController], 
    providers: [DemandsService]
})

export class demandsModules {}