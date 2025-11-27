import { useEffect, useState } from "react";
import mammoth from "mammoth";
import "./docxViewer.css";

type DocxViewerProps = {
  src: string;
  title?: string;
};

const DocxViewer = ({ src, title }: DocxViewerProps) => {
  const [html, setHtml] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    let cancelled = false;
    const loadDocx = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(src);
        if (!response.ok) throw new Error(`No se pudo cargar: ${src}`);
        const arrayBuffer = await response.arrayBuffer();
        const result = await mammoth.convertToHtml(
          { arrayBuffer },
          {
            styleMap: [
              "p[style-name='Heading 1'] => h1",
              "p[style-name='Heading 2'] => h2",
              "p[style-name='Heading 3'] => h3",
            ],
          }
        );
        if (!cancelled) setHtml(result.value);
      } catch (e: unknown) {
        const message =
          e instanceof Error
            ? e.message
            : typeof e === "string"
            ? e
            : "Error al procesar el documento.";
        if (!cancelled) setError(message);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };
    loadDocx();
    return () => {
      cancelled = true;
    };
  }, [src]);

  return (
    <section className="w-full min-h-screen bg-gray-50 text-primary">
      <div className="max-w-4xl mx-auto px-5 py-10">
        {title && (
          <h1 className="text-2xl md:text-4xl font-bold mb-6 uppercase">
            {title}
          </h1>
        )}

        {loading && (
          <div className="flex items-center gap-3 text-secondary">
            <span className="loader" />
            <span>Cargando documento…</span>
          </div>
        )}

        {error && (
          <div className="p-4 bg-red-100 text-red-700 rounded mb-6">
            {error}
          </div>
        )}

        {!loading && !error && (
          <article
            className="docx-viewer prose max-w-none bg-white p-6 rounded shadow"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        )}
      </div>
    </section>
  );
};

export default DocxViewer;
