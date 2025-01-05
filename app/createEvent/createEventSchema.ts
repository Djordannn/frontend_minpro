import * as Yup from "yup";

export const CreateEventSchema = Yup.object().shape({
  title: Yup.string()
    .min(5, "Title must be at least 5 word")
    .required("Title is required"),
  price: Yup.number().required("Price is required"),
  category: Yup.string().required("Category is required"),
  img: Yup.mixed()
    .nullable()
    .required("Image is required")
    .test(
      "FILE_SIZE",
      "File size is too large",
      (value) => !value || (value && value.size <= 5012 * 5012) // Max 1MB
    )
    .test(
      "FILE_TYPE",
      "Unsupported file format",
      (value) =>
        !value || (value && ["image/jpeg", "image/png"].includes(value.type))
    ),
});
