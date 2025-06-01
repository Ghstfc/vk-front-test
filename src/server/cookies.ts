'use server'

import {cookies} from "next/headers";

export async function getCookies() {
    const cook = await cookies()
    return cook.get('theme')
}