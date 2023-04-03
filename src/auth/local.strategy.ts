import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./service/auth/auth.service";
import { Injectable } from '@nestjs/common';
import { Strategy } from "passport-local";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super(); // config
  }
}