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
    ) { }

    async create(createDemandDto: CreateDemandDto): Promise<demandsEntity> {
        try {
            const demandToCreate = this.dtoToEntity(createDemandDto);
            const createDemand = await this.demandsRepository.save(demandToCreate);
            return createDemand;
        } catch (e) {
            console.error('Erro ao criar a demanda', e)
        }

    }
    async findAll(): Promise<demandsEntity[]> {
        try {
            const allDemands = await this.demandsRepository.find();
            return allDemands;
        } catch (e) {
            console.error('Erro ao procurar todas as demandas', e)
        }

    }

    async findOne(id: number): Promise<demandsEntity | undefined> {
        try {
            const foundDemand = await this.demandsRepository.findOne({ where: { id } })
            return foundDemand;
        } catch (e) {
            console.error('Erro ao procurar uma demanda', e)
        }

    }

    async update(id: number, updateDemanddto: UpdateDemanddto): Promise<demandsEntity | undefined> {
        try {
            const existingDemand = await this.demandsRepository.findOne({ where: { id } });

            if (!existingDemand) {
                return undefined
            }
            existingDemand.title = updateDemanddto.title;
            existingDemand.description = updateDemanddto.description;
            existingDemand.deadline = updateDemanddto.deadline;

            const updateDemand = await this.demandsRepository.save(existingDemand);
            return updateDemand;
        } catch (e) {
            console.error('Erro ao atualizar uma demanda', e)
        }


    }

    async remove(id: number): Promise<demandsEntity | undefined> {
        try {
            const removeDemand = await this.demandsRepository.findOne({ where: { id } });

            if (!removeDemand) {
                return undefined
            }

            const demandRemoved = await this.demandsRepository.remove(removeDemand);
            return demandRemoved;

        } catch (e) {
            console.error('Erro ao remover uma demanda SERVIDOR', e)
        }

    }

    private dtoToEntity(createDemandDto: CreateDemandDto): demandsEntity {
        const demand = new Demand();
        demand.title = createDemandDto.title;
        demand.description = createDemandDto.description;
        demand.deadline = createDemandDto.deadline;
        return demand;
    }
}
