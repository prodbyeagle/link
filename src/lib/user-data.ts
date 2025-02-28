import fs from 'fs/promises'
import path from 'path'
import {UserData} from '@/types/user'

export async function getUserData(username: string): Promise<UserData | null> {
    try {
        const filePath = path.join(process.cwd(), 'public', 'username', `${username}.json`)
        const fileContents = await fs.readFile(filePath, 'utf8')
        return JSON.parse(fileContents) as UserData
    } catch (error) {
        console.error(`Error fetching user data for ${username}:`, error)
        return null
    }
}

export async function getUsernames(): Promise<string[]> {
    try {
        const usersDir = path.join(process.cwd(), 'public', 'username')
        const files = await fs.readdir(usersDir)

        return files
            .filter(file => file.endsWith('.json'))
            .map(file => file.replace(/\.json$/, ''))
    } catch (error) {
        console.error('Error fetching usernames:', error)
        return []
    }
}