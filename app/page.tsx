"use client";

import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import { X } from "lucide-react";
import { FormLayout } from "@/components/FormLayout";

enum Roles {
  ADMIN = "ADMIN",
  USER = "USER",
  ANONYMOUS = "ANONYMOUS",
}

export default function FormWithFieldArray() {
  const formSchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    accountInfo: z
      .array(
        z.object({
          role: z.nativeEnum(Roles),
          is_active: z.boolean().default(false),
        }),
      )
      .refine((val) => {
        const roles = val.map((v) => v.role);
        return new Set(roles).size === roles.length;
      }, "Duplicate roles are not allowed"),
  });

  const formSchema2 = z.array(
    z.object({
      ethnicity: z.string(),
    }),
  );

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      accountInfo: [],
    },
  });

  const form2 = useForm<z.infer<typeof formSchema2>>({
    resolver: zodResolver(formSchema2),
    defaultValues: [],
  });

  const { fields, append, remove } = useFieldArray({
    name: "accountInfo",
    control: form.control,
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  console.log("field errors -->", form.formState.errors);

  return (
    <div className="h-full w-full flex items-center justify-center">
    </div>
  );
}
