import { NextResponse, type NextRequest } from "next/server";
import { db } from "~/server/db";
export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get("id");

    if (id) {
      const produto = await db.produto.findUnique({
        where: {
          id: Number(id),
        },
      });
      return NextResponse.json({ message: "OK", produto });
    } else {
      const produtos = await db.produto.findMany();
      return NextResponse.json({ message: "OK", produtos });
    }
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        {
          message: "Error",
          err: err.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
export async function POST(req: NextRequest) {
  const { nome, quantidadeEmEstoque } = (await req.json()) as {
    nome: string;
    quantidadeEmEstoque: number;
  };
  try {
    const produto = await db.produto.create({
      data: {
        nome,
        quantidadeEmEstoque,
      },
    });
    return NextResponse.json({ message: "OK", produto });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        {
          message: "Error",
          err: err.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PATCH(req: NextRequest) {
  const { id, nome, quantidadeEmEstoque } = (await req.json()) as {
    nome: string;
    quantidadeEmEstoque: number;
    id: number;
  };
  try {
    const produto = await db.produto.update({
      where: {
        id,
      },
      data: {
        nome,
        quantidadeEmEstoque,
      },
    });
    return NextResponse.json({ message: "OK", produto });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        {
          message: "Error",
          err: err.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(req: NextRequest) {
  const { id } = (await req.json()) as { id: number };
  try {
    const produto = await db.produto.delete({
      where: {
        id,
      },
    });
    return NextResponse.json({ message: "OK", produto });
  } catch (err) {
    if (err instanceof Error) {
      return NextResponse.json(
        {
          message: "Error",
          err: err.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}
