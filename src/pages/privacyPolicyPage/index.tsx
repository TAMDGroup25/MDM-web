import Layout from "../../components/layout";
import DocxViewer from "../../components/docxViewer";

const PrivacyPolicyPage = () => {
  return (
    <Layout>
      <div className="mt-16 md:mt-24">
        <DocxViewer
          src="/MDM_POLITICA DE PRIVACIDAD.docx"
          title="Política de Privacidad"
        />
      </div>
    </Layout>
  );
};

export default PrivacyPolicyPage;
