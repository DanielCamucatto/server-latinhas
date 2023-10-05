import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Body,
    Param
} from "@nestjs/common";
import { DemandsServices } from '../../services/demands.service';
import { CreateDemandDto, UpdateDemanddto } from './demand.dto';
import { create } from "domain";

@Controller('demands')
export class DemandsController {
    constructor(private readonly demandsService: DemandsServices) { }

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
        return this.demandsService.create(createDemandDto);
    }

    @Put('id')
    async update(@Param('id') id: number, @Body() UpdateDemanddto: UpdateDemanddto){
        return this.demandsService.update(id, UpdateDemanddto)
    }

    @Delete('id')
    async remove(@Param('id') id:number){
        return this.demandsService.remove(id)
    }

}
