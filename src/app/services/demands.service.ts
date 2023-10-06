import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Demand } from "../models/demand.model";
import { CreateDemandDto } from "../dtos/create-demand.dto";
import { UpdateDemanddto } from "../dtos/update-demand.dto";
import { demandsEntity } from "../database/demands.entity";

@Injectable()
export class DemandsService {
    constructor(
        @InjectRepository(demandsEntity)
        private readonly demandsRepository: Repository<demandsEntity>
    ){}

    async create(createDemandDto: CreateDemandDto): Promise<demandsEntity> {
        const demandToCreate = this.dtoToEntity(createDemandDto); 
        const createDemand = await this.demandsRepository.save(demandToCreate);
        return createDemand;
    }
    async findAll(): Promise<demandsEntity[]> {
        const allDemands = await this.demandsRepository.find(); 
        return allDemands;
    }

   async findOne(id: number): Promise<demandsEntity | undefined> {
    const foundDemand = await this.demandsRepository.findOne({where: {id}})
    return foundDemand;
   }

   async update(id: number, updateDemanddto: UpdateDemanddto): Promise<demandsEntity | undefined> {
    const existingDemand = await this.demandsRepository.findOne({where: {id}}); 

    if(!existingDemand){
        return undefined
    }
    existingDemand.title = updateDemanddto.title; 
    existingDemand.description  = updateDemanddto.description; 
    existingDemand.deadline = updateDemanddto.deadline;

    const updateDemand = await this.demandsRepository.save(existingDemand); 
    return updateDemand;

   }

   async remove(id: number): Promise<demandsEntity | undefined> {
    const removeDemand = await this.demandsRepository.findOne({where: {id}});
    
    if(!removeDemand){
        return undefined
    }

    const demandRemoved = await this.demandsRepository.remove(removeDemand); 
    return demandRemoved;
    
   }

    private dtoToEntity(createDemandDto: CreateDemandDto): demandsEntity {
        // Implemente a lógica de conversão de DTO para entidade aqui
        const demand = new Demand();
        demand.title = createDemandDto.title;
        demand.description = createDemandDto.description;
        demand.deadline = createDemandDto.deadline;
        return demand;
    }
}
