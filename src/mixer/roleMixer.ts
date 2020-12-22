// all this file do is mixing all permissions from roles to one single permission

import {PermissionI} from "../schema/interface/permission";
import {ChannelI, RoleI} from "../schema/interface/schemaInteface";

export function mixer(userRoles: RoleI[], channelPermissions: ChannelI['permissions']): PermissionI{

    // initial some var for holding data
    const roleID: string[] = userRoles.map(e => e._id);

    let finalPermission: PermissionI = {
        sendMessage: false,
        viewChannel: false,
        manageQuiz: false,
        manageHomeWorks: false,
    };

    //  we should know the intersection between roles and channel permissions
    const same = intersection(roleID, Object.keys(channelPermissions));

    // then we combine roles
    for (let role of userRoles){
        /*
        * search if role permission is overwritten in channel use the overwritten
        * else use the global permission
        */
        const permissionToMix = same.includes(role._id) ? channelPermissions[role._id] : role.global;

        // then combine the main permission with that permission
        finalPermission = mixPermission(finalPermission, permissionToMix);
    }

    // return the fresh newborn mix of all permissions
    return finalPermission;
}

function intersection(array1: string[], array2: string[]): string[]{

    // this piece of code return the same things on two array
    return array1.filter(
        element => array2.includes(element)
    )
}

// this function combines two permissions
function mixPermission(permission1: PermissionI, permission2: PermissionI): PermissionI{
    return {
        sendMessage: permission1.sendMessage || permission2.sendMessage,
        viewChannel: permission1.viewChannel || permission2.viewChannel,
        manageQuiz: permission1.manageQuiz || permission2.manageQuiz,
        manageHomeWorks: permission1.manageHomeWorks || permission2.manageHomeWorks,
    }
}
