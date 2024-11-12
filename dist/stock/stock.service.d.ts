import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { Stock } from './entities/stock.entity';
export declare class StockService {
    private stockRepository;
    constructor(stockRepository: typeof Stock);
    create(data: CreateStockDto): Promise<Stock>;
    findAll(): Promise<Stock[]>;
    findOne(id: number): Promise<void>;
    update(id: number, data: UpdateStockDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<[affectedCount: number]>;
}
