import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
	const url = req.nextUrl.clone()
	const isLogin = JSON.parse(req.cookies[`isLogin`] || `false`)

	// if (url.pathname !== `/` && !isLogin) {
	// 	url.pathname = `/`
	// 	return NextResponse.redirect(url)
	// }
}