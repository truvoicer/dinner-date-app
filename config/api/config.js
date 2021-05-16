export const apiConfig =
{
    "baseUrl": process.env.NEXT_PUBLIC_API_URL,
    "endpoints": {
        login: "/auth/login",
        auth: "/auth",
        session: "/session",
        user: "/user/%(user.id)d",
        member: "/member",
        media: "/user/%(user.id)d/media",
        locale: "/locale"
    }
}