import { CreateBillDto } from './dto/create-bill.dto';
import { UpdateBillDto } from './dto/update-bill.dto';
import { Bill } from './entities/bill.entity';
export declare class BillService {
    private billRepository;
    constructor(billRepository: typeof Bill);
    create(data: CreateBillDto): Promise<Bill>;
    findAll(): Promise<Bill[]>;
    findOne(id: number): Promise<Bill>;
    update(id: number, data: UpdateBillDto): Promise<[affectedCount: number]>;
    remove(id: number): Promise<[affectedCount: number]>;
}
