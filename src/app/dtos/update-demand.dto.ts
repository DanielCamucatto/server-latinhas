import { IsNotEmpty } from "class-validator";
export class UpdateDemanddto {
    @IsNotEmpty()
    readonly title: string;

    @IsNotEmpty()
    readonly description: string; 

    @IsNotEmpty()
    readonly deadline: Date; 
}