// all this file do is mixing all permissions from roles to one single permission

import {PermissionI} from "../schema/interface/permission";
import {ChannelI, RoleI} from "../schema/interface/schemaInteface";

export function mixer(userRoles: RoleI[], channelPermissions: ChannelI['permissions']): PermissionI{
    const roleID: string[] = [];
    let finalPermission: PermissionI;

}

function intersection(array1: string[], array2: string[]): string[]{

    // this piece of code return the same things on two array
    return array1.filter(
        element => array2.includes(element)
    )
}
