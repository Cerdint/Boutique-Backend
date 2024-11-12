import { CreateRolsDto } from "./dto/rols.dto";
import { UpdateRolsDto } from "./dto/rolsupdate.dto";
import { Rol } from "./entity/rol.entity";
export declare class RolsService {
    private rolRepository;
    constructor(rolRepository: typeof Rol);
    create(data: CreateRolsDto): Promise<Rol>;
    findOne(id: number): Promise<Rol>;
    findAll(): Promise<Rol[]>;
    updateOne(data: UpdateRolsDto, id: number): Promise<[affectedCount: number]>;
    deleteOne(id: number): Promise<[affectedCount: number]>;
}
