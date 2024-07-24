"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function create(formData: any) {
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  if (!firstName || !lastName) {
    return {
      error: "Required field is missing.",
    };
  }

  try {
    await prisma.author.create({
      data: {
        firstName,
        lastName,
      },
    });
  } catch {
    return {
      error: "Something went wrong.",
    };
  }
  revalidatePath("/authors");
}

export async function update(formData: any) {
  const id = Number.parseFloat(formData.get("id"));
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");

  if (!firstName || !lastName) {
    return {
      error: "Required field is missing.",
    };
  }

  try {
    await prisma.author.update({
      data: {
        firstName,
        lastName,
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
  const id = Number.parseFloat(formData.get("id"));
  try {
    await prisma.author.delete({
      where: {
        id,
      },
    });
  } catch {
    return {
      error: "Something went wrong.",
    };
  }
  revalidatePath("/authors");
}
