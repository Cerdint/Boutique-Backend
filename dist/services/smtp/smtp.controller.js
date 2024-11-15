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
exports.EmailController = void 0;
const common_1 = require("@nestjs/common");
const smtp_service_1 = require("./smtp.service");
const send_email_dto_1 = require("./dto/send-email.dto");
const user_service_1 = require("../../user/user.service");
let EmailController = class EmailController {
    constructor(smtpService, userService) {
        this.smtpService = smtpService;
        this.userService = userService;
    }
    async sendEmail(sendEmailDto) {
        const isValidDomain = await this.userService.findOne(sendEmailDto.to);
        if (!isValidDomain) {
            throw new common_1.HttpException('El dominio del correo no está permitido.', common_1.HttpStatus.FORBIDDEN);
        }
        try {
            await this.smtpService.sendMail(sendEmailDto.to, sendEmailDto.subject, sendEmailDto.text);
            return { message: 'Correo enviado exitosamente' };
        }
        catch (error) {
            console.log(error);
            throw new common_1.HttpException('Hubo un error al enviar el correo. Inténtalo más tarde.', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.EmailController = EmailController;
__decorate([
    (0, common_1.Post)('send'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [send_email_dto_1.SendEmailDto]),
    __metadata("design:returntype", Promise)
], EmailController.prototype, "sendEmail", null);
exports.EmailController = EmailController = __decorate([
    (0, common_1.Controller)('email'),
    __metadata("design:paramtypes", [smtp_service_1.SmtpService, user_service_1.UserService])
], EmailController);
//# sourceMappingURL=smtp.controller.js.map