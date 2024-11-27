import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy{
 async onModuleInit(){
    await this.$connect();
 }

 async onModuleDestroy() {
     await this.$disconnect();
 }

}

@Injectable()
export class UserService {
 constructor(private readonly prisma : PrismaService){ }

 async getAllUser(){
  return this.prisma.user.findMany();
 }

}