import {z} from 'zod';

export const photoNewFormSchema = z.object({
  title: z.string().min(1, { message: 'Título é obrigatório' }).max(255),
  file: z.instanceof(FileList).refine((files) => files.length > 0, {
    message: 'Arquivo de imagem é obrigatório',
  }),
  albumsIds: z.array(z.string().uuid()).optional(),
  // id: z.string().uuid(),
  // url: z.string().url(),
  // description: z.string().nullable(),
  // createdAt: z.date(),
  // updatedAt: z.date(),
});

// export const CreatePhotoSchema = z.object({
//   url: z.string().url(),
//   description: z.string().nullable().optional(),
// });

// export const UpdatePhotoSchema = z.object({
//   description: z.string().nullable().optional(),
// });

export type PhotoNewFormSchema = z.infer<typeof photoNewFormSchema>;
// export type CreatePhotoInput = z.infer<typeof CreatePhotoSchema>;
// export type UpdatePhotoInput = z.infer<typeof UpdatePhotoSchema>; 