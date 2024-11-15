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
exports.StockController = void 0;
const common_1 = require("@nestjs/common");
const stock_service_1 = require("./stock.service");
const create_stock_dto_1 = require("./dto/create-stock.dto");
const update_stock_dto_1 = require("./dto/update-stock.dto");
const swagger_1 = require("@nestjs/swagger");
const rols_guard_1 = require("../rol/rols.guard");
const rol_decorator_1 = require("../rol/decorators/rol.decorator");
let StockController = class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }
    create(createStockDto) {
        return this.stockService.create(createStockDto);
    }
    findAll() {
        return this.stockService.findAll();
    }
    findOne(id) {
        return this.stockService.findOne(+id);
    }
    update(id, updateStockDto) {
        return this.stockService.update(+id, updateStockDto);
    }
    remove(id) {
        return this.stockService.remove(+id);
    }
};
exports.StockController = StockController;
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Post)('create'),
    (0, swagger_1.ApiOperation)({ summary: "Crear un nuevo stock" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_stock_dto_1.CreateStockDto]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('findAll'),
    (0, swagger_1.ApiOperation)({ summary: "Listar todos los stocks" }),
    (0, rol_decorator_1.Roles)('Administrados', 'Usuario'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockController.prototype, "findAll", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        transform: true
    })),
    (0, common_1.Get)('findOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Listar un stock por id" }),
    (0, rol_decorator_1.Roles)('Usuario', 'Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "findOne", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Patch)('updateOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Actualizar un stock por el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_stock_dto_1.UpdateStockDto]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "update", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({
        whitelist: true,
        transform: true
    })),
    (0, common_1.Delete)('deleteOne/:id'),
    (0, swagger_1.ApiOperation)({ summary: "Eliminar un stock por el id" }),
    (0, rol_decorator_1.Roles)('Administrador'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockController.prototype, "remove", null);
exports.StockController = StockController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('stock'),
    (0, swagger_1.ApiTags)("Existencias"),
    (0, common_1.UseGuards)(rols_guard_1.RolesGuard),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
//# sourceMappingURL=stock.controller.js.map