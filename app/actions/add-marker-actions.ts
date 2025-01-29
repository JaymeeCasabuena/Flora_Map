"use server";

import { put } from "@vercel/blob";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { AddMarkerFormState } from "@/lib/zodSchema";
import { AddMarkerFormSchema } from "@/lib/zodSchema";
import { verifySession } from "@/lib/dal";

const prisma = new PrismaClient();

export async function addMarker(state: AddMarkerFormState, formData: FormData) {
  const validatedFields = AddMarkerFormSchema.safeParse({
    name: formData.get("name"),
    location: formData.get("location"),
    date: formData.get("date"),
    note: formData.get("note"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      success: false,
    };
  }

  const { userId } = await verifySession();
  const { name, location, date, note } = validatedFields.data;
  const lng = formData.get("lng");
  const lat = formData.get("lat");
  const file = formData.get("file") as File | null;

  try {
    let blobResult = null;

    // Upload file to Vercel Blob (if provided)
    if (file && file.size > 0) {
      blobResult = await put(file.name, file, {
        access: "public",
        addRandomSuffix: true,
      });
    }

    // Create a new entry in the database using Prisma
    const newEntry = await prisma.location.create({
      data: {
        name,
        coord: `${lat},${lng}`,
        location,
        date: date ? new Date(date) : null,
        note: note || null,
        authorId: userId,
        images: blobResult
          ? {
              create: [
                {
                  url: blobResult.url,
                },
              ],
            }
          : undefined,
      },
    });

    // Revalidate the current path to refresh the UI
    revalidatePath("/");
    return {
      success: true,
      message: "Marker added successfully!",
      newEntry,
    };
  } catch (error) {
    console.error("Adding new marker error:", error);
    return {
      success: false,
      message: "An error occurred while adding the marker.",
    };
  }
}
