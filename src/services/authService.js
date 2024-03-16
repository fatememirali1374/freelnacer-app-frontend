import http from "./httpService";

export function getOtp (data){
    return http.post("/user/get-otp", data).then(({data})=>data.data )
}
export function checkOtp (data){
    return http.post("/user/check-otp", data).then(({data})=>data.data )
}
export function completeProfile(data){
    return http.post("/user/complete-profile", data).then(({data})=>data.data )
}
export function getUser(data){
    return http.get("/user/profile", data).then(({data})=>data.data )
}

export function logoutApi(data){
    return http.post("/user/logout", data).then(({data})=>data.data )
}
export function getAllUser(data){
    return http.get("/admin/user/list", data).then(({data})=>data.data )
}
export function changeUserStatusApi({userId,data}) {
    return http.patch(`/admin/user/verify/${userId}`, data).then(({ data }) => data.data)
}