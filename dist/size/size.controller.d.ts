import { SizeService } from './size.service';
import { CreateSizeDto } from './dto/create-size.dto';
import { UpdateSizeDto } from './dto/update-size.dto';
export declare class SizeController {
    private readonly sizesService;
    constructor(sizesService: SizeService);
    create(createSizeDto: CreateSizeDto): Promise<import("./entities/size.entity").Size>;
    findAll(): Promise<import("./entities/size.entity").Size[]>;
    findOne(id: string): Promise<import("./entities/size.entity").Size>;
    update(id: string, updateSizeDto: UpdateSizeDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<[affectedCount: number]>;
}
