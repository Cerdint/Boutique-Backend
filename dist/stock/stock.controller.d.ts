import { StockService } from './stock.service';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
export declare class StockController {
    private readonly stockService;
    constructor(stockService: StockService);
    create(createStockDto: CreateStockDto): Promise<import("./entities/stock.entity").Stock>;
    findAll(): Promise<import("./entities/stock.entity").Stock[]>;
    findOne(id: string): Promise<void>;
    update(id: string, updateStockDto: UpdateStockDto): Promise<[affectedCount: number]>;
    remove(id: string): Promise<[affectedCount: number]>;
}
