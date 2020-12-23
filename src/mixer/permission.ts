import {ChannelI, RoleI, UserI} from "../schema/interface/schemaInteface";
import {mixer} from "./roleMixer";
import {PermissionI} from "../schema/interface/permission";

// define permission type
type permission = 'sendMessage' | 'viewChannel' | 'manageQuiz' | 'manageHomeWorks';

export function hasPermission(user: UserI, channel: ChannelI, permissions: permission | permission[]): boolean{

    // check if user is admin return true for everything
    if (user.admin) return true;

    // mix permissions
    const mainPermission = mixer(
        user.roles as RoleI[],
        channel.permissions
    );

    // if it need one permission
    if (!Array.isArray(permissions)) return mainPermission[permissions];

    // else
    let varToReturn = true;

    permissions.forEach(e => {
        varToReturn = mainPermission[e] && varToReturn;
    })

    return varToReturn;
}

export function getPermissions(user: UserI, channel: ChannelI): PermissionI{

    // check if user is admin
    if (user.admin) return {sendMessage: true, viewChannel: true, manageQuiz: true, manageHomeWorks: true};


}
