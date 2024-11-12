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
exports.SaleService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
let SaleService = class SaleService {
    constructor(saleRepository) {
        this.saleRepository = saleRepository;
    }
    async create(data) {
        return await this.saleRepository.create({
            user_iduser: data.user_iduser,
            status: data.status
        });
    }
    async findAll() {
        return await this.saleRepository.findAll({
            where: {
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
    }
    async findOne(id) {
        const saleFound = await this.saleRepository.findOne({
            where: {
                idsales: {
                    [sequelize_1.Op.eq]: id
                },
                is_deleted: {
                    [sequelize_1.Op.ne]: 1
                }
            }
        });
        if (!saleFound) {
            throw new common_1.NotFoundException("Venta no encontrada");
        }
        return saleFound;
    }
    async update(id, data) {
        const saleUpdate = await this.saleRepository.update(data, {
            where: {
                idsales: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (!saleUpdate) {
            throw new common_1.NotFoundException("Venta no encontrada o fue eliminada");
        }
        return saleUpdate;
    }
    async remove(id) {
        const saleRemove = await this.saleRepository.update({ is_deleted: 1 }, {
            where: {
                idsales: {
                    [sequelize_1.Op.eq]: id
                }
            }
        });
        if (!saleRemove) {
            throw new common_1.NotFoundException("Venta no encontrada");
        }
        return saleRemove;
    }
};
exports.SaleService = SaleService;
exports.SaleService = SaleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("SALES_REPOSITORY")),
    __metadata("design:paramtypes", [Object])
], SaleService);
//# sourceMappingURL=sale.service.js.map