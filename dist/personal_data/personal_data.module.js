"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalDataModule = void 0;
const common_1 = require("@nestjs/common");
const personal_data_service_1 = require("./personal_data.service");
const personal_data_controller_1 = require("./personal_data.controller");
const personal_data_provider_1 = require("./provider/personal_data.provider");
const sequelize_provider_1 = require("../sequelize/sequelize.provider");
const sequelize_1 = require("@nestjs/sequelize");
const personal_datum_entity_1 = require("./entities/personal_datum.entity");
const rols_module_1 = require("../rol/rols.module");
let PersonalDataModule = class PersonalDataModule {
};
exports.PersonalDataModule = PersonalDataModule;
exports.PersonalDataModule = PersonalDataModule = __decorate([
    (0, common_1.Module)({
        controllers: [personal_data_controller_1.PersonalDataController],
        providers: [personal_data_service_1.PersonalDataService, ...personal_data_provider_1.personaldatasProvider],
        imports: [
            sequelize_provider_1.SequelizeProvider, rols_module_1.RolsModule, sequelize_1.SequelizeModule.forFeature([personal_datum_entity_1.PersonalDatum])
        ]
    })
], PersonalDataModule);
//# sourceMappingURL=personal_data.module.js.map