import { BadRequestException, Body, Controller, Get, Post, Req, Res, UnauthorizedException} from '@nestjs/common';
import { AppService } from './app.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import{ Response, Request} from 'express';

@Controller('api')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private JwtService: JwtService
    ) {}

  @Post('register')
 async register( 
  @Body('email') email: string, 
  @Body('password') password: string, 
 ) {

    const hashedPassword = await bcrypt.hash(password, 12);

    return this.appService.create({
      email,
      password: hashedPassword
    });
 } 

  @Post('login')
  async login(
    @Body('email') email: string, 
    @Body('password') password: string,
    @Res({passthrough: true}) response: Response
  ){
      const user = await this.appService.findOneBy({
        where: {email}, });

      if (!user) {
        throw new BadRequestException('Invalid credentials');
      }

      if (!await bcrypt.compare(password, user.password)){
          throw new BadRequestException('Invalid credentials');
      }
      const jwt = await this.JwtService.signAsync({id: user.id});

      response.cookie('jwt',jwt, {httpOnly: true});
      return {
        message: 'success'
      };
  }

  @Get('user')
  async user(@Req() request: Request) {
    try {
      const cookie = request.cookies['jwt'];

      const data = await this.JwtService.verifyAsync(cookie);

      if(!data){
        throw new UnauthorizedException();
      }

      const user = await this.appService.findOneBy({id: data['id']});

      const {password, ...result} = user;

      return result;
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
