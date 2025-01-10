import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.get<string[]>('roles', context.getHandler());
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();
        const hasRole = () => requiredRoles.some((role) => role === user.role);
        if (!user || !user.role || !hasRole()) {
            throw new UnauthorizedException('You do not have the necessary permissions to access this resource.');
        }
        return true;
    }
}
