import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductSizeDto } from './dto/create-product_size.dto';
import { UpdateProductSizeDto } from './dto/update-product_size.dto';
import { ProductSize } from './entities/product_size.entity';
import { Op } from 'sequelize';

@Injectable()
export class ProductSizeService {
  constructor(
    @Inject("PRODUCTSIZES_REPOSITORY")
    private productsizeRepository: typeof ProductSize
  ){}
  async create(data: CreateProductSizeDto): Promise<ProductSize>{
    return await this.productsizeRepository.create({
      products_idproducts: data.products_idproducts,
      sizes_idsizes: data.sizes_idsizes,
      amount: data.amount
    })
  }

  async findAll(): Promise<ProductSize[]>{
    return await this.productsizeRepository.findAll({
      where:{
        is_deleted:{
          [Op.ne]: 1
        }
      }
    })
  }

  async findOne(id: number) {
    return await this.productsizeRepository.findOne({
      where:{
        idproduct_sizes:{
          [Op.eq]: id
        },
        is_deleted:{
          [Op.ne]: 1 
        }
      }
    })
  }

  async update(id: number, data: UpdateProductSizeDto) {
    const productsizeFound = await this.productsizeRepository.update(data, {
      where:{
        idproduct_sizes:{
          [Op.eq]: id
        }
      }
    })
    if(!productsizeFound){
      throw new NotFoundException("Tamaño de productos no encontrado")
    }
    return productsizeFound
  }

  async remove(id: number) {
    const productsizeDelete = await this.productsizeRepository.update(
      { is_deleted: 1},
      {
        where:{
          idproduct_sizes:{
            [Op.eq]: id
          }
        }
      }
    )
    if(!productsizeDelete){
      throw new NotFoundException("Tamaño de productos no encontrado")
    }

    return productsizeDelete
  }
}
