"use server";

import {
  SignupFormSchema,
  LoginFormSchema,
  LoginFormState,
  SignupFormState,
} from "@/lib/zodSchema";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { createSession, deleteSession } from "@/lib/session";

const prisma = new PrismaClient();

export async function signUp(state: SignupFormState, formData: FormData) {
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email: validatedFields.data.email,
    },
  });

  if (existingUser) {
    return {
      errors: {
        email: ["User already exists"],
      },
    };
  }

  const hashedPassword = await bcrypt.hash(validatedFields.data.password, 10);

  const user = await prisma.user.create({
    data: {
      name: validatedFields.data.name,
      email: validatedFields.data.email,
      password: hashedPassword,
    },
  });

  return redirect("/auth");
}

export async function logIn(state: LoginFormState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      email: validatedFields.data.email,
    },
  });

  if (!user) {
    return {
      errors: {
        email: ["User doesn't exist"],
      },
    };
  }

  const isPasswordValid = await bcrypt.compare(
    validatedFields.data.password,
    user.password
  );

  if (!isPasswordValid) {
    return {
      errors: {
        password: ["Invalid email or password"],
      },
    };
  }

  await createSession(user.id);

  return redirect("/dashboard");
}

export async function logOut() {
  deleteSession();
  return redirect("/auth");
}
