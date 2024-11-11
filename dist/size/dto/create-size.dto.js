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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateSizeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateSizeDto {
}
exports.CreateSizeDto = CreateSizeDto;
__decorate([
    (0, class_validator_1.IsString)({ message: "El nombre del tamaño debe ser una cadena" }),
    (0, class_validator_1.IsNotEmpty)({ message: "El nombre del tamaño no debe estar vacio" }),
    (0, class_validator_1.MaxLength)(45),
    (0, swagger_1.ApiProperty)({ example: "XL", description: "Nombre del tamaño" }),
    __metadata("design:type", String)
], CreateSizeDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateSizeDto.prototype, "is_deleted", void 0);
//# sourceMappingURL=create-size.dto.js.map