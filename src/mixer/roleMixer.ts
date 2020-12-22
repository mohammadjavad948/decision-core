// all this file do is mixing all permissions from roles to one single permission

import {PermissionI} from "../schema/interface/permission";
import {ChannelI, RoleI} from "../schema/interface/schemaInteface";

export function mixer(userRoles: RoleI[], channelPermissions: ChannelI['permissions']): PermissionI{
    // initial some var for holding data
    const roleID: string[] = [];
    let finalPermission: PermissionI;

    for (let role of userRoles){

    }

    return finalPermission;
}

function intersection(array1: string[], array2: string[]): string[]{

    // this piece of code return the same things on two array
    return array1.filter(
        element => array2.includes(element)
    )
}

function mixPermission(permission1: PermissionI, permission2: PermissionI): PermissionI{
    return {
        sendMessage: permission1.sendMessage || permission2.sendMessage,
        viewChannel: permission1.viewChannel || permission2.viewChannel,
        manageQuiz: permission1.manageQuiz || permission2.manageQuiz,
        manageHomeWorks: permission1.manageHomeWorks || permission2.manageHomeWorks,
    }
}
