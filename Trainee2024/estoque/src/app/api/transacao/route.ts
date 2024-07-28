import { getRuntime } from "@prisma/client/runtime/library";
import { NextResponse, type NextRequest } from "next/server";
import { Produto, User } from "prisma";
import { db } from "~/server/db";

export async function GET(req: NextRequest) {
    try {
        const id = req.nextUrl.searchParams.get('id');
        const filter = req.nextUrl.searchParams.get('filter');

        // Verifica se foi passado um ID e busca o produto correspondente
        if (id) {
            const produto = await db.transacao.findUnique({
                where: {
                    id: Number(id)
                }
            });
            return NextResponse.json({ message: "OK", produto });
        }

        // Prepara o filtro de data
        var whereClause: any = {};
        const today = new Date(); // Data atual
        let startDate: Date | null = null;

        if (filter) {
            switch (filter) {
                case 'Últimos 7 Dias':
                    startDate = new Date(today);
                    startDate.setDate(today.getDate() - 7);
                    break;
                case 'Última Semana':
                    startDate = new Date(today);
                    startDate.setDate(today.getDate() - today.getDay()); // Início da semana
                    break;
                case 'Último Mês':
                    startDate = new Date(today);
                    startDate.setMonth(today.getMonth() - 1);
                    startDate.setDate(1); // Início do mês
                    break;
                case 'Último Trimestre':
                    startDate = new Date(today);
                    startDate.setMonth(today.getMonth() - 3);
                    startDate.setDate(1); // Início do trimestre
                    break;
                case 'Último Semestre':
                    startDate = new Date(today);
                    startDate.setMonth(today.getMonth() - 6);
                    startDate.setDate(1); // Início do semestre
                    break;
                case 'Último Ano':
                    startDate = new Date(today);
                    startDate.setFullYear(today.getFullYear() - 1);
                    startDate.setMonth(0); // Janeiro
                    startDate.setDate(1); // Início do ano
                    break;
                default:
                    startDate = null;
                    break;
            }
            console.log(filter)

            if (startDate) {
                whereClause.data = { 
                    gte: startDate, 
                    lte: today 
                };
            }
        }
        console.log(whereClause)

        // Busca produtos com base no filtro
        const produtos = await db.transacao.findMany({
            where: {
                ...whereClause
            }
        });

        return NextResponse.json({ message: "OK", produtos });
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
            );
        }
    }
}

export async function POST(req: NextRequest) {
    const { tipo ,quantidade, userId ,produtoId} = await req.json() as { tipo: string , quantidade: number , userId: string , produtoId: number}
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
    const { id, tipo, quantidade } = await req.json() as { tipo: string, quantidade: number, id: number }
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
    const { id } = await req.json() as { id: number }
    try {
        const transacao = await db.transacao.delete({
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