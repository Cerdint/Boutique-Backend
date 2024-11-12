import { SaleProductService } from './sale_product.service';
import { CreateSaleProductDto } from './dto/create-sale_product.dto';
import { UpdateSaleProductDto } from './dto/update-sale_product.dto';
export declare class SaleProductController {
    private readonly saleProductService;
    constructor(saleProductService: SaleProductService);
    create(createSaleProductDto: CreateSaleProductDto): Promise<import("./entities/sale_product.entity").SaleProduct>;
    findAll(): Promise<import("./entities/sale_product.entity").SaleProduct[]>;
    findOne(id: string): Promise<void>;
    update(id: number, updateSaleProductDto: UpdateSaleProductDto): Promise<void>;
    remove(id: number): Promise<void>;
}
