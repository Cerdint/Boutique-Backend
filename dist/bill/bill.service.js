"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let BillService = class BillService {
    constructor(billRepository) {
        this.billRepository = billRepository;
    }
    async create(data) {
        return await this.billRepository.create({
            sales_idsales: data.sales_idsales,
            total_price: data.total_price
        });
    }
    async findAll() {
        return await this.billRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const billFound = await this.billRepository.findOne({
            where: {
                idbills: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (!billFound) {
            throw new common_1.NotFoundException("Factura no encontrada");
        }
        return billFound;
    }
    async update(id, data) {
        const billUpdate = await this.billRepository.update(data, {
            where: {
                idbills: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (!billUpdate) {
            throw new common_1.NotFoundException("Factura no encontrada");
        }
        return billUpdate;
    }
    async remove(id) {
        const billDelete = await this.billRepository.update({ is_deleted: 1 }, {
            where: {
                idbills: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (!billDelete) {
            throw new common_1.NotFoundException("Factura no encontrada");
        }
        return billDelete;
    }
};
exports.BillService = BillService;
exports.BillService = BillService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("BILLS_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], BillService);
//# sourceMappingURL=bill.service.js.map