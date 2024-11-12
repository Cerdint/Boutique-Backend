import { ConflictException, Inject, Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { CreateUserDto } from "./dto/createUser.dto";
import { UpdateUserDto } from "./dto/updateUser.dto";
import { email } from "src/constants/VerifyEmails.constant";
import * as bt from 'bcrypt'
import {config} from '../config/config'
import { Op } from "sequelize";
import { User } from "./entity/user.entity";
import { Rol } from "src/rol/entity/rol.entity";

@Injectable()
export class UserService{
    constructor(
        @Inject('USERS_REPOSITORY')
        private userRepository: typeof User
    ){}

    async create(data: CreateUserDto): Promise<User>{
        let ValidEmail = false
            email.forEach(emails => {
                if(data.email.endsWith(emails)){
                    ValidEmail = true
                }
            })
            if(!ValidEmail){
                throw new UnauthorizedException("Dominio de correo no permitido")
            }
        try{
            data.password = await bt.hash(data.password, config.salt)
            return await this.userRepository.create({
                name: data.name,
                email: data.email,
                password: data.password,
                rols_idrols: data.rols_idrols
            })
        }catch(error){
            console.log(error)
        }
    }

    async findOne(email: string){
        const UserFound = await this.userRepository.findOne({
            where:{
                email:email
            },
        })
        if(!UserFound){
            throw new NotFoundException("Usuario no encontrado")
        }
        return await UserFound
    }

    async findAll(): Promise<User[]>{
        return await this.userRepository.findAll()
    }

    async findUserRole(userId: number) {
        return await this.userRepository.findOne({
            where:{
                iduser:{
                    [Op.eq]:userId
                }
            },
            include:[{model:Rol}]
        });
    }

    async findOneToLogin(email: string){
        const userFound = await this.userRepository.findOne({
            where:{
                email: {
                    [Op.eq]:email
                },
                is_deleted:{
                    [Op.ne]:1
                }
            },
        })
        if(!userFound){
            throw new NotFoundException("Usuario no encontrado")
        }
        return await userFound
    }

    async update(data: UpdateUserDto, id: number){
        const userUpdate = await this.userRepository.update(data, {
            where:{
                iduser:{
                    [Op.eq]:id
                }
            }
        })

        if(!userUpdate){
            throw new NotFoundException("Usuario no encontrado o fue eliminado")
        }

        return userUpdate
    }

    async delete(id: number): Promise<User>{
        const userDelete = await this.userRepository.findOne({
            where:{
                iduser:id,
                is_deleted:{
                    [Op.ne]:1
                }
            }
        })
        if(!userDelete){
            throw new NotFoundException("usuario no encontrado o fue eliminado")
        }
        const [affectedCount] = await this.userRepository.update(
            { is_deleted: 1},
            {
                where:{
                    iduser:id,
                    is_deleted:{
                        [Op.ne]:1
                    }
                }
            }
        )
        if(affectedCount === 0){
            throw new NotFoundException("Usuario eliminado o fue eliminado")
        }
        return userDelete
    }
}