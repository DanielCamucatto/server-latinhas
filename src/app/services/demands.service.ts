import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Demand } from "../models/demand.model";
import { CreateDemandDto } from "../dtos/create-demand.dto";

@Injectable()
export class DemandsService { // Corrigido para DemandsService
    constructor(
        @InjectRepository(Demand)
        private readonly demandsRepository: Repository<Demand>
    ){}

    async create(createDemandDto: CreateDemandDto): Promise<Demand> {
        const demandToCreate = this.dtoToEntity(createDemandDto); 
        const createDemand = await this.demandsRepository.save(demandToCreate);
        return createDemand;
    }

    private dtoToEntity(createDemandDto: CreateDemandDto): Demand {
        // Implemente a lógica de conversão de DTO para entidade aqui
        const demand = new Demand();
        demand.title = createDemandDto.title;
        demand.description = createDemandDto.description;
        demand.deadline = createDemandDto.deadline;
        return demand;
    }
}
