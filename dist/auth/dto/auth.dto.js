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
exports.AuthDTO = void 0;
const swagger_1 = require("@nestjs/swagger");
class AuthDTO {
}
exports.AuthDTO = AuthDTO;
__decorate([
    (0, swagger_1.ApiProperty)({ example: "user@est.univalle.edu", description: "Correo de la universidad" }),
    __metadata("design:type", String)
], AuthDTO.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "constraseña1234", description: "Constraseña del usuario" }),
    __metadata("design:type", String)
], AuthDTO.prototype, "pass", void 0);
//# sourceMappingURL=auth.dto.js.map