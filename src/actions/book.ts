"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function create(formData: any) {
  const title = formData.get("title");
  const author = Number.parseFloat(formData.get("author"));

  if (!title || !author) {
    return {
      error: "Required field is missing.",
    };
  }

  try {
    await prisma.book.create({
      data: {
        title,
        author: {
          connect: {
            id: author,
          },
        },
      },
    });
  } catch {
    return {
      error: "Something went wrong.",
    };
  }
  revalidatePath("/books");
}

export async function update(formData: any) {
  const id = formData.get("id");
  const title = formData.get("title");
  const author = Number.parseFloat(formData.get("author"));

  if (!title || !author) {
    return {
      error: "Required field is missing.",
    };
  }

  try {
    await prisma.book.update({
      data: {
        title,
        author: {
          connect: {
            id: author,
          },
        },
      },
      where: {
        id,
      },
    });
  } catch {
    return {
      error: "Something went wrong.",
    };
  }
}

export async function remove(formData: any) {
  const id = formData.get("id");
  try {
    await prisma.book.delete({
      where: {
        id,
      },
    });
  } catch {
    return {
      error: "Something went wrong.",
    };
  }
  revalidatePath("/books");
}
