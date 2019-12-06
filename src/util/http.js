export const HTTP_STATUS =(()=>{
    let status = {
        OK:{code:200,text:'OK',description:''},
        CREATEED:{code:201,text:'CREATED',description:''},
        DELETED:{code:204,text:'DELETED',description:''},
        NOT_MODIFIED:{code:304,text:'',description:''},
        BAD_REQUEST:{code:400,text:'BAT_REQUEST',description:'请求格式不正确，无法获取到服务'},
        BAD_REQUEST: {code: 400, text: 'BAD REQUEST', description: '请求格式不正确，无法获取服务'},
        METHOD_NOT_ALLOWED: {code: 405, text: 'METHOD NOT ALLOWED', description: '请求方法不支持'},
        UNSUPPORTED_MEDIA_TYPE: {code: 415, text: 'UNSUPPORTED MEDIA TYPE', description: '请求格式不正确，无法获取服务'},
        INTERNAL_SERVER_ERROR: {code: 500, text: 'INTERNAL SERVER_ERROR', description: '服务端发生错误'},
        PAGE_NOT_FOUND: {code: 404, text: 'PAGE NOT FOUND', description: '网络资源无法访问'},
        NOT_AUTHORIZED: {code: 401, text: 'NOT AUTHORIZED', description: '对不起，您没有访问该资源的权限'},
        FORBIDDEN: {code: 403, text: 'FORBIDDEN', description: '对不起，您没有访问该资源的权限'},
        UNPROCESSABLE_ENTITY: {code: 422, text: 'UNPROCESSABLE ENTITY', description: '对不起，您没有访问该资源的权限'},
        SESSION_TIME_OUT: {code: 419, text: 'SESSION_TIME_OUT', description: '会话超时'}
    };
    status.CODES={
        SUCCESS:{
            200:status.OK,
            201:status.CREATEED,
            204:status.DELETED,
            304:status.NOT_MODIFIED
        },
        // 程序错误
        PROGRAM_ERROR:{
            400:status.BAD_REQUEST,
            405:status.METHOD_NOT_ALLOWED,
            415:status.UNSUPPORTED_MEDIA_TYPE,
            500:status.INTERNAL_SERVER_ERROR
        },
        //访问错误
        NETWORK_ERROR:{
            404:status.PAGE_NOT_FOUND
        },
        //权限错误
        AUTH_ERROR:{
            401:status.NOT_AUTHORIZED,
            403:status.FORBIDDEN,
            419:status.SESSION_TIME_OUT
        },
        //交互错误
        COMMUNICATION_ERROR:{
            422:status.UNPROCESSABLE_ENTITY
        }
    };
    return status;
})();