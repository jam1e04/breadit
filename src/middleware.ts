import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(req: NextRequest) {
  const token = await getToken({ 
    req,
    secret: process.env.NEXTAUTH_SECRET
  })

  const isSignInPage = req.nextUrl.pathname.startsWith('/sign-in')
  
  // 如果是登录页面，但用户已认证，则重定向到首页
  if (isSignInPage && token) {
    return NextResponse.redirect(new URL('/', req.nextUrl))
  }
  
  // 如果是受保护的路由且用户未认证，则重定向到登录页
  const isProtectedRoute = 
    req.nextUrl.pathname.startsWith('/r/') && 
    (req.nextUrl.pathname.includes('/submit') || req.nextUrl.pathname.includes('/create'))
  
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL('/sign-in', req.nextUrl))
  }

  // 对于其他情况，允许请求继续
  return NextResponse.next()
}

// 配置中间件匹配规则
export const config = {
  matcher: [
    '/sign-in',
    '/r/:path*/submit',
    '/r/create',
    '/submit/:path*',  // 添加这个用于提交帖子的路由
    '/api/vote/:path*'  // 添加这个用于投票API
  ],
}