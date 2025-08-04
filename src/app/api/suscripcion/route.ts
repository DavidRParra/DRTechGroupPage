import {NextResponse} from 'next/server';
import { conn } from '@/lib/mysql';

export async function GET(){
    return NextResponse.json({ message: 'Todo esta bien' });
}

export async function POST(request: Request){
    const body = await request.json();
    const { firstName, lastName, role, email, message } = body;

    if (!firstName || !lastName || !role || !email || !message) {
        return NextResponse.json({ error: 'Todos los campos son obligatorios' }, { status: 400 });
    }

    //Insertar datos a la base de datos
    try {
        await conn.query('INSERT INTO suscripciones (nombre, apellido, puesto, email, mensaje) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, role, email, message]);
        await conn.end();
        return NextResponse.json({ message: 'Suscripcion exitosa' });
    } catch (error) {
        console.error('Error al insertar en la base de datos:', error);
        return NextResponse.json({ error: 'Error al procesar la solicitud' }, { status: 500 });
    }
}