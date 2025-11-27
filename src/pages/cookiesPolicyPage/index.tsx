import Layout from "../../components/layout";
import DocxViewer from "../../components/docxViewer";

const CookiesPolicyPage = () => {
  return (
    <Layout>
      <div className="mt-16 md:mt-24">
        <DocxViewer
          src="/MDM_POLITICA DE COOKIES_(PLANTILLA).docx"
          title="Política de Cookies"
        />
      </div>
    </Layout>
  );
};

export default CookiesPolicyPage;
