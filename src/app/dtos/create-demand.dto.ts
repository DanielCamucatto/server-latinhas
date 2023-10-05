import { IsString, IsNotEmpty, IsDateString } from "class-validator";
export class CreateDemandDto {
    @IsString()
    @IsNotEmpty()
    readonly title: string;
    
    @IsString()
    @IsNotEmpty()
    readonly description: string;

    @IsDateString()
    @IsNotEmpty()
    readonly deadline: Date;
}