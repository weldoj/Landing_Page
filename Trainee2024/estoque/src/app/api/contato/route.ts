import { NextResponse, type NextRequest } from "next/server";
import { db } from "~/server/db";
export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')

        if (id) {
            const contato = await db.contato.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json({ message: "OK", contato })
        } else {
            const contatos = await db.contato.findMany()
            return NextResponse.json({ message: "OK", contatos })
        }
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message: "Error",
                    err: err.message
                },
                {
                    status: 500
                }
            )
        }
    }
}
export async function POST(req: NextRequest) {
    const { nome, email, telefone } = await req.json() as { nome: string, email: string, telefone: string }
    try {
        const contato = await db.contato.create({
            data: {
                nome,
                email,
                telefone
            }
        })
        return NextResponse.json({ message: "OK", contato })
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message: "Error",
                    err: err.message
                },
                {
                    status: 500
                }
            )
        }
    }
}

export async function PATCH(req: NextRequest) {
    const { id, nome, email, telefone } = await req.json() as { nome: string, email: string, telefone: string, id: number }
    try {
        const contato = await db.contato.update({
            where: {
                id
            },
            data: {
                nome,
                email,
                telefone
            }
        })
        return NextResponse.json({ message: "OK", contato })
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message: "Error",
                    err: err.message
                },
                {
                    status: 500
                }
            )
        }
    }
}

export async function DELETE(req: NextRequest) {
    const { id } = await req.json() as { id: number }
    try {
        const contato = await db.contato.delete({
            where: {
                id
            },
        })
        return NextResponse.json({ message: "OK", contato })
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json(
                {
                    message: "Error",
                    err: err.message
                },
                {
                    status: 500
                }
            )
        }
    }
}