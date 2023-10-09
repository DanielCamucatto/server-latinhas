import { Controller, Get, Post, Put, Delete, Body, Param, HttpStatus, HttpException } from "@nestjs/common";
import { DemandsService } from '../../services/demands.service';
import { CreateDemandDto } from '../../dtos/create-demand.dto';
import { UpdateDemanddto } from '../../dtos/update-demand.dto';

@Controller('/demands')
export class DemandsController {
    constructor(private readonly demandsService: DemandsService) { }

    @Get()
    async findAll() {
        return this.demandsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: number) {
        return this.demandsService.findOne(id);
    }

    @Post()
    async create(@Body() createDemandDto: CreateDemandDto) {
        if (!createDemandDto.title || !createDemandDto.description || !createDemandDto.deadline) {
            throw new HttpException('Dados incompletos. Certifique-se de fornecer título, descrição e prazo.', HttpStatus.BAD_REQUEST);
        }

        return this.demandsService.create(createDemandDto);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateDemandDto: UpdateDemanddto) {
        return this.demandsService.update(id, updateDemandDto);
    }

    @Delete(':id')
    async remove(@Param('id') id: number) {
        return this.demandsService.remove(id);
    }
}
