import { NextResponse, type NextRequest } from "next/server";
import { db } from "~/server/db";
export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')

        if (id) {
            const transacao = await db.Transacao.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json({ message: "OK", transacao })
        } else {
            const transacoes = await db.Transacao.findMany()
            return NextResponse.json({ message: "OK", transacoes })
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
    const { tipo ,quantidade } = await req.json() as { tipo: string , quantidade: Number }
    try {
        const transacao = await db.Transacao.create({
            data: {
                tipo,
                quantidade

            }
        })
        return NextResponse.json({ message: "OK", transacao })
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
    const { id, tipo, quantidade } = await req.json() as { tipo: string, quantidade: Number, id: Number }
    try {
        const transacao = await db.Transacao.update({
            where: {
                id
            },
            data: {
                tipo,
                quantidade
            }
        })
        return NextResponse.json({ message: "OK", transacao })
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
    const { id } = await req.json() as { id: Number }
    try {
        const transacao = await db.Transacao.delete({
            where: {
                id
            },
        })
        return NextResponse.json({ message: "OK", transacao })
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