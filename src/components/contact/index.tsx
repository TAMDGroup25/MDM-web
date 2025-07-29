import CustomButton from "../ui/customButton";
import CustomInput from "../ui/customInput";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  };

  return (
    <section
      id="contacto"
      className="relative w-full p-5 md:p-0 min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/534174/pexels-photo-534174.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-4xl w-full p-6 sm:p-10 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#053158] mb-8 uppercase">
          {t("contact.title")}
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <CustomInput
            label={t("contact.name")}
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <CustomInput
            label={t("contact.email")}
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <div className="md:col-span-2">
            <label className="block mb-2 text-sm font-medium text-[#053158]">
              {t("contact.message")}
            </label>
            <textarea
              name="mensaje"
              rows={5}
              value={form.mensaje}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#053158] resize-none"
            />
          </div>
          <div className="md:col-span-2 flex justify-center">
            <CustomButton type="submit" label={t("contact.button")} size="xl" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
