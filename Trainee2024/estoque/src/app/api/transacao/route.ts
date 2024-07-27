import { NextResponse, type NextRequest } from "next/server";
import { Produto, User } from "prisma";
import { db } from "~/server/db";
export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id')
        const time = await db.transacao.findMany({
            orderBy: {
                data:"asc"
            })

        if (id) {
            const transacao = await db.transacao.findUnique({
                where: {
                    id: Number(id)
                }
            })
            return NextResponse.json({ message: "OK", transacao })
        } else {
            const transacoes = await db.transacao.findMany()
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
    const { tipo ,quantidade, userId ,produtoId} = await req.json() as { tipo: string , quantidade: Number , userId: string , produtoId: Number}
    try {
        const transacao = await db.transacao.create({
            data: {
                tipo,
                quantidade,
                userId,
                produtoId

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
        const transacao = await db.transacao.update({
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